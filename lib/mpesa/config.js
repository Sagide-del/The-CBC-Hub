// M-Pesa Configuration
const config = {
  // Your credentials
  consumerKey: 'GNqAFGSj27LTtDLk2OCBdjBkxeFH5rR9nogGel7wAomsLlwZ',
  consumerSecret: 'GDocQ9NeNrNqDgDpZmi5gyDMQvK8GAbGkPDgr60VL4QEiA6hAOcaGweZuvxz7icC',
  tillNumber: '345670',
  phoneNumber: '254748519923', // Format: 254XXXXXXXXX
  
  // API URLs
  urls: {
    // Use sandbox for testing, production for live
    oauth: 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    stkPush: 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    query: 'https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query',
    
    // Sandbox URLs (for testing)
    sandbox: {
      oauth: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      stkPush: 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      query: 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query'
    }
  },
  
  // Callback URLs (your domain)
  callbackUrl: 'https://the-cbc-hub.vercel.app/api/mpesa/callback',
  successUrl: 'https://the-cbc-hub.vercel.app/marketplace/success',
  cancelUrl: 'https://the-cbc-hub.vercel.app/marketplace/cancel',
  
  // Passkey (you need to get this from Safaricom)
  // For sandbox, use: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"
  passkey: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
};

// Determine environment
const isProduction = process.env.NODE_ENV === 'production';
config.currentUrls = isProduction ? config.urls : config.urls.sandbox;

module.exports = config;
