const QRCode = require('qrcode');
const fs = require('fs');

const url = 'http://localhost:3000'; // substitua pelo domínio real depois

QRCode.toFile('public/qrcode.png', url, {
  color: {
    dark: '#000',
    light: '#FFF'
  }
}, function (err) {
  if (err) throw err;
  console.log('QR Code gerado em public/qrcode.png');
});