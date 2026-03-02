// This endpoint receives M-Pesa payment notifications
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Log the callback data (for debugging)
    console.log('M-Pesa Callback Received:', JSON.stringify(req.body, null, 2));
    
    // Extract the callback data
    const { Body } = req.body;
    
    if (Body && Body.stkCallback) {
      const { 
        ResultCode, 
        ResultDesc, 
        MerchantRequestID, 
        CheckoutRequestID,
        CallbackMetadata 
      } = Body.stkCallback;
      
      // Check if payment was successful
      if (ResultCode === 0) {
        // Payment successful - extract metadata
        const metadata = {};
        if (CallbackMetadata && CallbackMetadata.Item) {
          CallbackMetadata.Item.forEach(item => {
            metadata[item.Name] = item.Value;
          });
        }
        
        console.log('Payment successful:', {
          CheckoutRequestID,
          amount: metadata.Amount,
          phone: metadata.PhoneNumber,
          receipt: metadata.MpesaReceiptNumber
        });
        
        // Here you would:
        // 1. Update order status in database
        // 2. Send confirmation email
        // 3. Trigger download link generation
        
      } else {
        // Payment failed
        console.log('Payment failed:', ResultDesc);
      }
    }
    
    // Always respond with success to M-Pesa
    res.status(200).json({ 
      ResultCode: 0, 
      ResultDesc: 'Success' 
    });
    
  } catch (error) {
    console.error('Callback error:', error);
    // Still return success to M-Pesa
    res.status(200).json({ 
      ResultCode: 0, 
      ResultDesc: 'Success' 
    });
  }
}
