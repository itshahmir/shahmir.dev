# SEO Setup Documentation

This document explains how SEO (Search Engine Optimization) is configured for shahmir.dev.

## Overview

The website uses **Static Site Generation (SSG)** with pre-rendering to ensure all pages are SEO-friendly and crawlable by search engines.

## Key Components

### 1. Pre-rendering Setup

**Tool:** `vite-plugin-prerender`

**Configuration:** `vite.config.js`

The site pre-renders all pages during build time, creating static HTML files for:
- Homepage (`/`)
- Blog Archive (`/blog`)
- All Blog Posts (`/blog/{slug}`)

**Total Pages:** 149 static pages generated

### 2. Route Generation

**File:** `prerender-routes.js`

Automatically generates all routes from:
- `blogPosts` - Main blog articles
- `wpCodeSnippets` - WordPress code snippets
- `wpSnippetsData` - Additional WordPress snippets

### 3. Sitemap Generation

**File:** `generate-sitemap.js`

**Output:** `public/sitemap.xml` and `dist/sitemap.xml`

Generates XML sitemap with:
- All page URLs
- Last modification dates
- Change frequency
- Priority scores

**Build Command:**
```bash
npm run generate:sitemap
```

### 4. Robots.txt

**File:** `public/robots.txt`

Allows all search engine crawlers and points to the sitemap.

### 5. Meta Tags

**File:** `index.html`

Includes comprehensive SEO meta tags:

#### Primary Meta Tags
- Title
- Description
- Keywords
- Author
- Canonical URL

#### Open Graph Tags (Facebook)
- OG:type, title, description, image, url, site_name

#### Twitter Card Tags
- Twitter:card, title, description, image, url

#### Schema.org Structured Data
- Person schema with job title, description, social links

### 6. Per-Page Meta Tags

**BlogPost.jsx** - Lines 108-191

Each blog post dynamically updates:
- `<title>` tag
- Meta description
- Meta keywords
- Article Schema (if available)
- FAQ Schema (if FAQs exist)

## Build Process

### Development
```bash
npm run dev
```
Runs development server without pre-rendering.

### Production Build
```bash
npm run build
```

**Steps:**
1. Generates sitemap with all URLs
2. Builds the Vite app
3. Pre-renders all 149 pages to static HTML
4. Outputs to `dist/` directory

### Production Build (Full)
```bash
npm run build:prod
```

**Steps:**
1. Generates sitemap (before build)
2. Builds the Vite app with pre-rendering
3. Regenerates sitemap (after build, into dist/)

## SEO Features

### ✅ Static HTML Pages
All pages are pre-rendered to static HTML, making them fully crawlable by search engines.

### ✅ Proper Meta Tags
Every page has appropriate meta tags for:
- Search engines (Google, Bing)
- Social media (Facebook, Twitter, LinkedIn)
- Structured data (Schema.org)

### ✅ Sitemap
XML sitemap with all 149 pages, automatically updated on build.

### ✅ Robots.txt
Properly configured to allow search engine crawlers.

### ✅ Canonical URLs
Each page has a canonical URL to prevent duplicate content issues.

### ✅ Semantic HTML
Proper use of HTML5 semantic tags (header, article, nav, etc.)

### ✅ Page Load Performance
- Deferred JavaScript loading
- Minified assets
- Source maps for debugging

## Testing SEO

### 1. Check Pre-rendered HTML
```bash
npm run build
cd dist
# Open any HTML file - it should contain full page content
```

### 2. Verify Sitemap
```bash
npm run generate:sitemap
cat public/sitemap.xml
```

### 3. Test with Search Console
1. Deploy to production
2. Submit sitemap to Google Search Console: `https://shahmir.dev/sitemap.xml`
3. Request indexing for key pages

### 4. Validate Structured Data
Use Google's Rich Results Test:
https://search.google.com/test/rich-results

## Monitoring & Maintenance

### Update Sitemap
Sitemap is automatically regenerated on every build. If you add new blog posts:

```bash
npm run generate:sitemap
```

### Check Crawl Status
Monitor in Google Search Console:
- Coverage reports
- Index status
- Crawl errors

### Performance Monitoring
Use tools like:
- Google PageSpeed Insights
- Lighthouse
- GTmetrix

## Best Practices Implemented

1. **Fast Load Times** - Static HTML loads instantly
2. **Mobile-Friendly** - Responsive design with proper viewport
3. **Semantic Markup** - Proper HTML5 structure
4. **Structured Data** - Schema.org markup for rich results
5. **Social Sharing** - Open Graph and Twitter Card tags
6. **Internal Linking** - Proper navigation and related posts
7. **Clean URLs** - SEO-friendly slug structure
8. **Content Updates** - Dynamic meta tags per page

## Deployment Checklist

Before deploying:

- [ ] Run `npm run build:prod`
- [ ] Verify dist/ contains HTML files with content
- [ ] Check sitemap.xml exists in dist/
- [ ] Verify robots.txt is in dist/
- [ ] Test meta tags in browser
- [ ] Deploy to production
- [ ] Submit sitemap to search engines
- [ ] Monitor Google Search Console

## Troubleshooting

### Pre-rendering fails
- Check that `render-event` is dispatched in `index.jsx`
- Increase timeout in vite.config.js rendererOptions
- Check console for JavaScript errors

### Pages not indexed
- Verify sitemap is accessible: `https://shahmir.dev/sitemap.xml`
- Check robots.txt allows crawling
- Submit URL to Google Search Console
- Wait 1-2 weeks for initial indexing

### Meta tags not showing
- Clear browser cache
- Check `<head>` in built HTML files
- Verify dynamic meta tag updates in BlogPost.jsx

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Vite Plugin Prerender](https://github.com/magne4000/vite-plugin-prerender)
- [Schema.org](https://schema.org)
- [Open Graph Protocol](https://ogp.me)

---

**Last Updated:** October 2025
**Maintained By:** Shahmir Khan
