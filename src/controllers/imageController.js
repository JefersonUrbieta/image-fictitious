import ejs from 'ejs'
import path from 'path'
import nodeHtmlToImage from 'node-html-to-image'

function getWidth(size) {
  if (size.indexOf('x') !== -1) {
    return size.split('x')[0]
  }
  return size
}

function getHeight(size) {
  if (size.indexOf('x') !== -1) {
    return size.split('x')[1]
  }
  return size
}

function getBackground(background) {
  if (background) {
    return `#${background}`
  }
  return '#000000'
}

function getForeground(foreground) {
  if (foreground) {
    return `#${foreground}`
  }
  return '#fff'
}

function getText(text, width, height) {
  return text && text.length > 0 ? text : `${width} x ${height}`
}

function getParameters(params, query) {
  const width = getWidth(params.size)
  const height = getHeight(params.size)
  const background = getBackground(params.background)
  const foreground = getForeground(params.foreground)
  const text = getText(query.text, width, height)

  return { width, height, background, foreground, text }
}

export default {
  async getImage(req, res) {
    const parameters = getParameters(req.params, req.query)

    const html = await ejs.renderFile(path.join(__dirname, '../template/image.ejs'), parameters)

    const image = await nodeHtmlToImage({
      html
    })

    res
      .writeHead(200, { 'Content-Type': 'image/png' })
      .end(image, 'binary')
  }
}
