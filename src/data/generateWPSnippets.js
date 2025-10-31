// WordPress Code Snippets Generator
// Generates complete blog posts from wpSnippetsData with content, SEO, and FAQs

import { wpSnippetsData } from './wpSnippetsData';

// Content templates organized by category
const contentTemplates = {
  security: (title, code) => `
    <h2>Why This Security Measure Matters</h2>
    <p>WordPress security is crucial for protecting your website from vulnerabilities and attacks. This snippet helps enhance your site's security posture.</p>

    <h3>The Code Snippet</h3>
    <pre><code class="language-php">${code || '// Security code here'}</code></pre>

    <h3>Implementation</h3>
    <ol>
      <li>Access your WordPress site files via FTP or cPanel</li>
      <li>Navigate to wp-content/themes/your-theme/</li>
      <li>Open functions.php file</li>
      <li>Add the code snippet at the end</li>
      <li>Save and test your site</li>
    </ol>

    <h3>Security Benefits</h3>
    <ul>
      <li>Reduces attack surface area</li>
      <li>Prevents common vulnerabilities</li>
      <li>Improves overall site security</li>
      <li>Protects sensitive data</li>
    </ul>
  `,

  performance: (title, code) => `
    <h2>Boost Your WordPress Performance</h2>
    <p>Site speed is critical for user experience and SEO. This optimization reduces load time and improves site performance.</p>

    <h3>The Code</h3>
    <pre><code class="language-php">${code || '// Performance optimization code'}</code></pre>

    <h3>Expected Performance Gains</h3>
    <ul>
      <li>Faster page load times</li>
      <li>Reduced server resource usage</li>
      <li>Better Google PageSpeed scores</li>
      <li>Improved user experience</li>
    </ul>

    <h3>Testing Your Optimization</h3>
    <p>After implementing, test your site with:</p>
    <ul>
      <li>Google PageSpeed Insights</li>
      <li>GTmetrix</li>
      <li>Pingdom Tools</li>
      <li>WebPageTest</li>
    </ul>
  `,

  woocommerce: (title, code) => `
    <h2>Customizing WooCommerce</h2>
    <p>WooCommerce powers millions of online stores. This snippet helps you customize your e-commerce functionality.</p>

    <h3>The Code Snippet</h3>
    <pre><code class="language-php">${code || '// WooCommerce customization'}</code></pre>

    <h3>How It Works</h3>
    <p>This code modifies default WooCommerce behavior to better suit your business needs.</p>

    <h3>Compatibility</h3>
    <ul>
      <li>WooCommerce 3.0+</li>
      <li>WordPress 5.0+</li>
      <li>Compatible with most themes</li>
      <li>Works with standard WooCommerce plugins</li>
    </ul>
  `
};

// FAQ templates
const generateFAQs = (title, category, difficulty) => {
  const baseFAQs = [
    {
      question: `Is this ${title.toLowerCase()} snippet safe to use?`,
      answer: `Yes, this code follows WordPress coding standards and best practices. Always test on a staging site first and backup your site before making changes.`
    },
    {
      question: `Where should I add this code?`,
      answer: `Add this code to your child theme's functions.php file or use a code snippets plugin like WPCode or Code Snippets to safely add custom code.`
    },
    {
      question: `Will this work with my theme?`,
      answer: `This snippet should work with any properly coded WordPress theme. If you encounter issues, check for theme conflicts or conflicting plugins.`
    }
  ];

  if (difficulty === 'Advanced') {
    baseFAQs.push({
      question: `Do I need programming knowledge for this?`,
      answer: `This is an advanced snippet that requires understanding of WordPress development. If you're not comfortable with code, consider hiring a developer.`
    });
  }

  return baseFAQs;
};

// SEO metadata generator
const generateSEO = (title, slug, category, tags) => ({
  metaTitle: `${title}: Complete Guide & Code Snippet 2025`,
  metaDescription: `Learn how to implement ${title.toLowerCase()} in WordPress. Complete code snippet with examples and best practices.`,
  keywords: tags.map(t => t.toLowerCase()),
  canonical: `/blog/${slug}`,
  schema: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "articleSection": category,
    "proficiencyLevel": "Beginner"
  }
});

// Generate complete blog post
export function generateSnippetPost(snippetData) {
  const { id, title, slug, category, tags, difficulty, code } = snippetData;

  // Determine content template based on category
  let contentTemplate = contentTemplates.performance;
  if (category.includes('Security')) contentTemplate = contentTemplates.security;
  else if (category.includes('WooCommerce')) contentTemplate = contentTemplates.woocommerce;

  return {
    id,
    slug,
    title,
    excerpt: `Learn how to ${title.toLowerCase()} in WordPress with this complete code snippet and implementation guide.`,
    content: contentTemplate(title, code),
    code: code || `// ${title} code snippet`,
    author: 'Shahmir Khan',
    date: new Date(2025, 0, 20 - (id % 20)).toISOString().split('T')[0],
    readTime: `${Math.ceil(Math.random() * 3) + 3} min read`,
    category,
    tags,
    difficulty: difficulty || 'Intermediate',
    compatibility: 'WordPress 4.0+',
    seo: generateSEO(title, slug, category, tags),
    faqs: generateFAQs(title, category, difficulty)
  };
}

// Generate all 100 snippets
export function generateAllSnippets() {
  return wpSnippetsData.map(snippet => generateSnippetPost(snippet));
}

// Export for use in blog system
export default generateAllSnippets;
