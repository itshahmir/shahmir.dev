// Generate all routes for pre-rendering
import { blogPosts } from './src/data/blogPosts.js'
import { wpCodeSnippets } from './src/data/wpCodeSnippets.js'

// Combine all posts
const allPosts = [...blogPosts, ...wpCodeSnippets]

// Generate routes
const routes = [
  '/',              // Homepage
  '/blog',          // Blog archive
]

// Add all blog post routes
allPosts.forEach(post => {
  routes.push(`/blog/${post.slug}`)
})

export default routes
