import { queryTransactionStatus } from '../../../lib/mpesa/utils';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { checkoutRequestID } = req.query;
    
    if (!checkoutRequestID) {
      return res.status(400).json({ error: 'CheckoutRequestID is required' });
    }
    
    const result = await queryTransactionStatus(checkoutRequestID);
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Query error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
