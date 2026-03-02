const fetch = require('node-fetch');

// Your credentials
const consumerKey = 'GNqAFGSj27LTtDLk2OCBdjBkxeFH5rR9nogGel7wAomsLlwZ';
const consumerSecret = 'GDocQ9NeNrNqDgDpZmi5gyDMQvK8GAbGkPDgr60VL4QEiA6hAOcaGweZuvxz7icC';
const tillNumber = '345670';
const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';

async function testCredentials() {
    console.log('🔍 Testing M-Pesa Credentials...');
    
    // Test 1: Get Access Token
    try {
        const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
        
        const tokenResponse = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });
        
        const tokenData = await tokenResponse.json();
        
        if (tokenData.access_token) {
            console.log('✅ Access Token: SUCCESS');
            console.log(`   Token: ${tokenData.access_token.substring(0, 20)}...`);
        } else {
            console.log('❌ Access Token: FAILED');
            console.log('   Response:', tokenData);
            return false;
        }
    } catch (error) {
        console.log('❌ Access Token Error:', error.message);
        return false;
    }
    
    // Test 2: Generate Password (format check)
    try {
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
        const passwordString = tillNumber + passkey + timestamp;
        const password = Buffer.from(passwordString).toString('base64');
        
        console.log('✅ Password Generation: SUCCESS');
        console.log(`   Timestamp: ${timestamp}`);
        console.log(`   Password: ${password.substring(0, 20)}...`);
    } catch (error) {
        console.log('❌ Password Generation: FAILED');
        return false;
    }
    
    return true;
}

testCredentials().then(success => {
    if (success) {
        console.log('\n✅ All credential tests passed!');
    } else {
        console.log('\n❌ Credential tests failed. Please check your credentials.');
    }
});
