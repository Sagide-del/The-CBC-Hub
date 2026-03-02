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
    
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

// Format phone number to international format
function formatPhoneNumber(phone) {
  // Remove any non-numeric characters
  let cleaned = phone.replace(/\D/g, '');
  
  // If starts with 0, replace with 254
  if (cleaned.startsWith('0')) {
    cleaned = '254' + cleaned.substring(1);
  }
  
  // If starts with 7, add 254
  if (cleaned.startsWith('7')) {
    cleaned = '254' + cleaned;
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

// Generate password for STK push
function generatePassword(timestamp) {
  const businessShortCode = config.tillNumber;
  const passkey = config.passkey;
  const data = businessShortCode + passkey + timestamp;
  
  // In production, you'd need to base64 encode this
  // For now, we'll return a placeholder
  return Buffer.from(data).toString('base64');
}

// Initiate STK Push
async function initiateSTKPush(phoneNumber, amount, accountReference, transactionDesc) {
  try {
    const token = await getAccessToken();
    const timestamp = getTimestamp();
    const password = generatePassword(timestamp);
    const formattedPhone = formatPhoneNumber(phoneNumber);
    
    const payload = {
      BusinessShortCode: config.tillNumber,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: formattedPhone,
      PartyB: config.tillNumber,
      PhoneNumber: formattedPhone,
      CallBackURL: config.callbackUrl,
      AccountReference: accountReference || 'CBC Hub',
      TransactionDesc: transactionDesc || 'Payment for resources'
    };
    
    const response = await fetch(config.currentUrls.stkPush, {
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
    console.error('Error initiating STK push:', error);
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
