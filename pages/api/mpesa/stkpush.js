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
    
    // Validate input
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }
    
    if (amount < 10) {
      return res.status(400).json({ error: 'Minimum amount is KSh 10' });
    }
    
    // Initiate STK push to YOUR number (0748519923)
    const result = await initiateSTKPush(
      amount,
      `CBC-${itemId || 'RES'}`,
      `Payment for ${itemName || 'CBC Hub resources'}`
    );
    
    console.log('STK Push Result:', result);
    
    // Check if successful
    if (result.ResponseCode === '0') {
      return res.status(200).json({
        success: true,
        message: 'STK push sent to 0748519923. Check your phone to complete payment.',
        checkoutRequestID: result.CheckoutRequestID,
        merchantRequestID: result.MerchantRequestID
      });
    } else {
      return res.status(400).json({
        success: false,
        error: result.ResponseDescription || 'Failed to initiate payment'
      });
    }
  } catch (error) {
    console.error('STK Push error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again.'
    });
  }
}
