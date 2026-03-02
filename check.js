const fs = require('fs');
try {
    const data = fs.readFileSync('package.json', 'utf8');
    JSON.parse(data);
    console.log('? Node.js: Valid JSON');
} catch (e) {
    console.log('? Node.js: ' + e.message);
}
