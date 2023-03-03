const path = require('path');
const fs = require('fs');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'text.txt'), 'utf-8');

readableStream.on('data', cont => console.log(cont));