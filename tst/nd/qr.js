var QRCode = require('qrcode')

QRCode.toDataURL('I am P!', function (err, url) {
  console.log(url)
})

QRCode.toFile('./qr.svg', 'I am P', {
    color: {
      dark: '#000000',  // Black dots
      light: '#FFFFFF' // White background
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  })