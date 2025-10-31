// Generate sitemap.xml for SEO
import { blogPosts } from './src/data/blogPosts.js'
import { wpCodeSnippets } from './src/data/wpCodeSnippets.js'
import { wpSnippetsData } from './src/data/wpSnippetsData.js'
import fs from 'fs'
import path from 'path'

const DOMAIN = 'https://shahmir.dev'

// Combine all posts
const allPosts = [...blogPosts, ...wpCodeSnippets, ...wpSnippetsData]

// Generate sitemap
const generateSitemap = () => {
  const urls = []

  // Add homepage
  urls.push({
    loc: DOMAIN,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  })

  // Add blog archive
  urls.push({
    loc: `${DOMAIN}/blog`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.9'
  })

  // Add all blog posts
  allPosts.forEach(post => {
    const lastmod = post.date ? new Date(post.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]

    urls.push({
      loc: `${DOMAIN}/blog/${post.slug}`,
      lastmod: lastmod,
      changefreq: 'monthly',
      priority: '0.8'
    })
  })

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Write to public directory
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml)
  console.log(`✅ Sitemap generated with ${urls.length} URLs`)

  // Also write to dist directory if it exists (for production build)
  const distDir = path.join(process.cwd(), 'dist')
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml)
    console.log(`✅ Sitemap copied to dist directory`)
  }
}

generateSitemap()
