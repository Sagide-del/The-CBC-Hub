import { initiateSTKPush } from '../../../lib/mpesa/utils';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { amount, itemName, itemId } = req.body;
    
    console.log('📝 STK Push Request:', { amount, itemName, itemId });
    
    // Validate input
    if (!amount) {
      return res.status(400).json({ 
        success: false, 
        error: 'Amount is required' 
      });
    }
    
    if (amount < 10) {
      return res.status(400).json({ 
        success: false, 
        error: 'Minimum amount is KSh 10' 
      });
    }
    
    // Initiate STK push
    const result = await initiateSTKPush(
      amount,
      `CBC-${itemId || 'RES'}`,
      `Payment for ${itemName || 'CBC Hub resources'}`
    );
    
    console.log('📊 STK Push Result:', result);
    
    // Check if successful
    if (result.ResponseCode === '0') {
      return res.status(200).json({
        success: true,
        message: '✅ STK push sent! Check your phone (0748519923) to complete payment.',
        checkoutRequestID: result.CheckoutRequestID,
        merchantRequestID: result.MerchantRequestID
      });
    } else {
      // Provide specific error messages based on response code
      const errorMessages = {
        '1037': 'Timeout. Please try again.',
        '1032': 'Transaction cancelled.',
        '1': 'Insufficient balance.',
        '0': 'Success'
      };
      
      return res.status(400).json({
        success: false,
        error: errorMessages[result.ResponseCode] || result.ResponseDescription || 'Failed to initiate payment',
        details: result
      });
    }
  } catch (error) {
    console.error('❌ STK Push error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Server error. Please try again.'
    });
  }
}
