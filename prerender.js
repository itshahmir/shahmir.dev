import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { blogPosts } from './src/data/blogPosts.js'
import { wpCodeSnippets } from './src/data/wpCodeSnippets.js'
import { wpSnippetsData } from './src/data/wpSnippetsData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Combine all posts
const allPosts = [...blogPosts, ...wpCodeSnippets, ...wpSnippetsData]

// Routes to pre-render
const routes = [
  '/',
  '/blog',
  ...allPosts.map(post => `/blog/${post.slug}`)
]

const distDir = path.join(__dirname, 'dist')
const PORT = 4173 // Vite preview port

async function prerender() {
  console.log('🚀 Starting pre-rendering process...')
  console.log(`📁 Output directory: ${distDir}`)
  console.log(`📄 Total routes to render: ${routes.length}`)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    const url = `http://localhost:${PORT}${route}`

    try {
      console.log(`[${i + 1}/${routes.length}] Rendering: ${route}`)

      // Navigate to the page
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      })

      // Wait for React to render - longer for blog archive
      const waitTime = route === '/blog' ? 5000 : 2000
      await new Promise(resolve => setTimeout(resolve, waitTime))

      // For blog archive, wait for blog grid to be populated
      if (route === '/blog') {
        try {
          await page.waitForSelector('.blog-grid .blog-card', { timeout: 5000 })
        } catch (e) {
          console.warn('  ⚠️  Blog cards not found, proceeding anyway...')
        }
      }

      // Get the rendered HTML
      const html = await page.content()

      // Determine output path
      let outputPath
      if (route === '/') {
        outputPath = path.join(distDir, 'index.html')
      } else if (route.endsWith('/')) {
        outputPath = path.join(distDir, route, 'index.html')
      } else {
        outputPath = path.join(distDir, `${route}.html`)
      }

      // Create directory if it doesn't exist
      const dir = path.dirname(outputPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      // Write the HTML file
      fs.writeFileSync(outputPath, html)
      successCount++

    } catch (error) {
      console.error(`❌ Error rendering ${route}:`, error.message)
      errorCount++
    }
  }

  await browser.close()

  console.log('\n✅ Pre-rendering complete!')
  console.log(`   Success: ${successCount} pages`)
  console.log(`   Errors: ${errorCount} pages`)

  if (errorCount > 0) {
    console.log('\n⚠️  Some pages failed to render. Check errors above.')
    process.exit(1)
  }
}

// Run the pre-rendering
prerender().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
