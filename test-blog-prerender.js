import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.join(__dirname, 'dist')
const PORT = 4173

async function testBlogRender() {
  console.log('🧪 Testing blog archive pre-rendering...')

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  // Listen for console messages
  page.on('console', msg => console.log('BROWSER:', msg.text()))
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message))

  const url = `http://localhost:${PORT}/blog`

  try {
    console.log(`📄 Navigating to: ${url}`)

    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    })

    console.log('⏳ Waiting 5 seconds for React to render...')
    await new Promise(resolve => setTimeout(resolve, 5000))

    console.log('⏳ Waiting for blog cards to appear...')
    try {
      await page.waitForSelector('.blog-grid .blog-card', { timeout: 10000 })
      const cardCount = await page.$$eval('.blog-grid .blog-card', cards => cards.length)
      console.log(`✅ Found ${cardCount} blog cards!`)
    } catch (e) {
      console.warn('⚠️  Blog cards not found!')
    }

    const html = await page.content()
    const outputPath = path.join(distDir, 'blog.html')

    fs.writeFileSync(outputPath, html)

    const size = (html.length / 1024).toFixed(2)
    console.log(`✅ Saved to blog.html (${size}KB)`)

    // Check if content exists
    if (html.includes('Blog Archive') && html.includes('blog-card')) {
      console.log('✅ Blog archive has content!')
    } else {
      console.log('❌ Blog archive is empty!')
    }

  } catch (error) {
    console.error('❌ Error:', error.message)
  }

  await browser.close()
}

testBlogRender().catch(console.error)
