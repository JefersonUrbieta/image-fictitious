import QRCode from 'qrcode'

function getText(text, width, height) {
  return text && text.length > 0 ? text : 'Hello'
}

export default {
  async getQrCode(req, res) {
    const qr = await QRCode.toDataURL(getText(req.query.text))

    const im = qr.split(',')[1]

    const img = Buffer.from(im, 'base64')

    res
      .writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      })
      .end(img)
  }
}
