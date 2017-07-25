// 1. 모듈 추출
var crypto = require('crypto');

// 2. 해시 생성
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// 3. 출력
console.log('crypto_hash:', output);