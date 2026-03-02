const config = require('./config');

// Generate OAuth Token
async function getAccessToken() {
  try {
    const auth = Buffer.from(`${config.consumerKey}:${config.consumerSecret}`).toString('base64');
    
    const response = await fetch(config.currentUrls.oauth, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    
    if (!data.access_token) {
      throw new Error('No access token in response: ' + JSON.stringify(data));
    }
    
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

// Format phone number to international format (CRITICAL FIX)
function formatPhoneNumber(phone) {
  // Remove any non-numeric characters
  let cleaned = phone.replace(/\D/g, '');
  
  // If starts with 0 (e.g., 0748519923)
  if (cleaned.startsWith('0')) {
    cleaned = '254' + cleaned.substring(1);
  }
  // If starts with 7 (e.g., 748519923)
  else if (cleaned.startsWith('7')) {
    cleaned = '254' + cleaned;
  }
  // If already has 254, ensure it's correct length
  else if (cleaned.startsWith('254')) {
    // Already correct format
  } else {
    // Assume it's a local number without prefix
    cleaned = '254' + cleaned;
  }
  
  // Ensure it's exactly 12 digits (254 + 9 digits)
  if (cleaned.length !== 12) {
    throw new Error(`Invalid phone number format. Expected 12 digits (254XXXXXXXXX), got ${cleaned.length} digits`);
  }
  
  return cleaned;
}

// Generate timestamp in format YYYYMMDDHHmmss
function getTimestamp() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

// Generate password for STK push (CRITICAL FIX)
function generatePassword(timestamp) {
  const businessShortCode = config.tillNumber;
  const passkey = config.passkey;
  
  // IMPORTANT: The format is BusinessShortCode + Passkey + Timestamp
  // No spaces, no extra characters
  const data = businessShortCode + passkey + timestamp;
  
  return Buffer.from(data).toString('base64');
}

// Initiate STK Push
async function initiateSTKPush(amount, accountReference, transactionDesc) {
  try {
    const token = await getAccessToken();
    const timestamp = getTimestamp();
    const password = generatePassword(timestamp);
    
    // Use YOUR number for all test transactions
    const phoneNumber = '254748519923'; // Hardcoded for testing
    
    console.log('📱 STK Push Debug:');
    console.log('   Token:', token ? '✓' : '✗');
    console.log('   Timestamp:', timestamp);
    console.log('   Password:', password);
    console.log('   Phone:', phoneNumber);
    console.log('   Amount:', amount);
    
    const payload = {
      BusinessShortCode: config.tillNumber,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerBuyGoodsOnline', // Use CustomerBuyGoodsOnline for Till numbers
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: config.tillNumber,
      PhoneNumber: phoneNumber,
      CallBackURL: config.callbackUrl,
      AccountReference: accountReference || 'CBC Hub',
      TransactionDesc: transactionDesc || 'Payment for resources'
    };
    
    console.log('📦 Payload:', JSON.stringify(payload, null, 2));
    
    const response = await fetch(config.currentUrls.stkPush, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    const responseText = await response.text();
    console.log('📩 Raw Response:', responseText);
    
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      throw new Error('Invalid JSON response: ' + responseText);
    }
    
    return data;
  } catch (error) {
    console.error('❌ STK Push Error:', error);
    throw error;
  }
}

// Query transaction status
async function queryTransactionStatus(checkoutRequestID) {
  try {
    const token = await getAccessToken();
    const timestamp = getTimestamp();
    const password = generatePassword(timestamp);
    
    const payload = {
      BusinessShortCode: config.tillNumber,
      Password: password,
      Timestamp: timestamp,
      CheckoutRequestID: checkoutRequestID
    };
    
    const response = await fetch(config.currentUrls.query, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error querying transaction:', error);
    throw error;
  }
}

module.exports = {
  getAccessToken,
  formatPhoneNumber,
  getTimestamp,
  generatePassword,
  initiateSTKPush,
  queryTransactionStatus
};
