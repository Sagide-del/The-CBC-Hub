// M-Pesa Configuration
const config = {
  // Your credentials
  consumerKey: 'GNqAFGSj27LTtDLk2OCBdjBkxeFH5rR9nogGel7wAomsLlwZ',
  consumerSecret: 'GDocQ9NeNrNqDgDpZmi5gyDMQvK8GAbGkPDgr60VL4QEiA6hAOcaGweZuvxz7icC',
  tillNumber: '345670',
  
  // Your personal test number (you'll receive STK pushes)
  testPhoneNumber: '254748519923', // 0748519923 formatted
  
  // API URLs
  urls: {
    oauth: 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    stkPush: 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    query: 'https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query',
    
    sandbox: {
      oauth: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      stkPush: 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      query: 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query'
    }
  },
  
  // Callback URLs
  callbackUrl: 'https://the-cbc-hub.vercel.app/api/mpesa/callback',
  
  // Passkey (from Safaricom)
  passkey: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
};

// Determine environment
const isProduction = process.env.NODE_ENV === 'production';
config.currentUrls = isProduction ? config.urls : config.urls.sandbox;

module.exports = config;
