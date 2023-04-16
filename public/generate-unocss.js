const fs = require('fs')
const path = require('path')
const { createUnocss } = require('unocss')

const config = require('../unocss.config')

async function generateUnocss() {
  const unocssInstance = await createUnocss(config)

  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
  const result = await unocssInstance.generateCSS(html)

  fs.writeFileSync(path.resolve(__dirname, 'public/generated-unocss.css'), result.css)
}

generateUnocss()
