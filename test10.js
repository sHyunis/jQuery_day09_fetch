//파일 시스템 요구
const fs = require('fs');

const data = fs.readFileSync('./database/string.txt', 'utf-8'); // 파일 읽어오는 시스템 자체를 갖고 있다.
console.log(data);