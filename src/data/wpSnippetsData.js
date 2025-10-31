// Complete list of 100 WordPress Code Snippets - Full Collection
// Optimized for SEO, includes FAQs, and schema markup

export const wpSnippetsData = [
  // Security Snippets (1-15)
  {
    id: 1,
    category: 'WordPress Security',
    slug: 'disable-xmlrpc-wordpress-security',
    title: 'How to Disable XML-RPC in WordPress',
    tags: ['Security', 'XML-RPC', 'Brute Force', 'DDoS Protection'],
    difficulty: 'Beginner',
    code: `add_filter('xmlrpc_enabled', '__return_false');`
  },
  {
    id: 2,
    category: 'WordPress Security',
    slug: 'limit-login-attempts',
    title: 'Limit Login Attempts Without Plugin',
    tags: ['Security', 'Login', 'Brute Force Protection'],
    difficulty: 'Intermediate'
  },
  {
    id: 3,
    category: 'WordPress Security',
    slug: 'hide-wp-version',
    title: 'Remove WordPress Version Number',
    tags: ['Security', 'WordPress Hardening', 'Version'],
    difficulty: 'Beginner'
  },
  {
    id: 4,
    category: 'WordPress Security',
    slug: 'disable-file-editing',
    title: 'Disable Theme and Plugin File Editor',
    tags: ['Security', 'File Protection', 'WordPress Hardening'],
    difficulty: 'Beginner'
  },
  {
    id: 5,
    category: 'WordPress Security',
    slug: 'hide-login-errors',
    title: 'Hide WordPress Login Error Messages',
    tags: ['Security', 'Login', 'User Enumeration'],
    difficulty: 'Beginner'
  },
  {
    id: 6,
    category: 'WordPress Security',
    slug: 'disable-user-enumeration',
    title: 'Prevent User Enumeration',
    tags: ['Security', 'Users', 'Privacy'],
    difficulty: 'Intermediate'
  },
  {
    id: 7,
    category: 'WordPress Security',
    slug: 'add-security-headers',
    title: 'Add Security Headers to WordPress',
    tags: ['Security', 'Headers', 'XSS Protection'],
    difficulty: 'Advanced'
  },
  {
    id: 8,
    category: 'WordPress Security',
    slug: 'disable-rest-api',
    title: 'Disable or Restrict WordPress REST API',
    tags: ['Security', 'REST API', 'API Protection'],
    difficulty: 'Intermediate'
  },
  {
    id: 9,
    category: 'WordPress Security',
    slug: 'two-factor-authentication',
    title: 'Add Two-Factor Authentication Code',
    tags: ['Security', '2FA', 'Authentication'],
    difficulty: 'Advanced'
  },
  {
    id: 10,
    category: 'WordPress Security',
    slug: 'block-bad-user-agents',
    title: 'Block Malicious User Agents',
    tags: ['Security', 'Bots', 'User Agents'],
    difficulty: 'Intermediate'
  },

  // Performance Optimization (11-25)
  {
    id: 11,
    category: 'WordPress Performance',
    slug: 'disable-embeds-wordpress',
    title: 'Disable oEmbeds for Better Performance',
    tags: ['Performance', 'Optimization', 'Embeds'],
    difficulty: 'Beginner'
  },
  {
    id: 12,
    category: 'WordPress Performance',
    slug: 'limit-post-revisions',
    title: 'Limit Post Revisions to Save Database Space',
    tags: ['Performance', 'Database', 'Revisions'],
    difficulty: 'Beginner'
  },
  {
    id: 13,
    category: 'WordPress Performance',
    slug: 'disable-emojis',
    title: 'Disable WordPress Emoji Scripts',
    tags: ['Performance', 'Emojis', 'Optimization'],
    difficulty: 'Beginner'
  },
  {
    id: 14,
    category: 'WordPress Performance',
    slug: 'defer-javascript-loading',
    title: 'Defer JavaScript Loading',
    tags: ['Performance', 'JavaScript', 'Page Speed'],
    difficulty: 'Intermediate'
  },
  {
    id: 15,
    category: 'WordPress Performance',
    slug: 'lazy-load-images',
    title: 'Add Native Lazy Loading to Images',
    tags: ['Performance', 'Images', 'Lazy Load'],
    difficulty: 'Beginner'
  },
  {
    id: 16,
    category: 'WordPress Performance',
    slug: 'disable-heartbeat-api',
    title: 'Control WordPress Heartbeat API',
    tags: ['Performance', 'Heartbeat', 'AJAX'],
    difficulty: 'Intermediate'
  },
  {
    id: 17,
    category: 'WordPress Performance',
    slug: 'remove-query-strings',
    title: 'Remove Query Strings from Static Resources',
    tags: ['Performance', 'Caching', 'Query Strings'],
    difficulty: 'Beginner'
  },
  {
    id: 18,
    category: 'WordPress Performance',
    slug: 'disable-dashicons',
    title: 'Disable Dashicons on Frontend',
    tags: ['Performance', 'Icons', 'Frontend'],
    difficulty: 'Beginner'
  },
  {
    id: 19,
    category: 'WordPress Performance',
    slug: 'limit-comments-per-page',
    title: 'Paginate Comments for Performance',
    tags: ['Performance', 'Comments', 'Pagination'],
    difficulty: 'Beginner'
  },
  {
    id: 20,
    category: 'WordPress Performance',
    slug: 'disable-block-editor-styles',
    title: 'Disable Gutenberg Block Styles',
    tags: ['Performance', 'Gutenberg', 'Styles'],
    difficulty: 'Beginner'
  },

  // Theme Development (21-35)
  {
    id: 21,
    category: 'WordPress Theme Development',
    slug: 'register-custom-post-type',
    title: 'Register a Custom Post Type',
    tags: ['CPT', 'Custom Post Types', 'Development'],
    difficulty: 'Intermediate'
  },
  {
    id: 22,
    category: 'WordPress Theme Development',
    slug: 'register-custom-taxonomy',
    title: 'Create Custom Taxonomy',
    tags: ['Taxonomy', 'Categories', 'Development'],
    difficulty: 'Intermediate'
  },
  {
    id: 23,
    category: 'WordPress Theme Development',
    slug: 'add-custom-widget-area',
    title: 'Register Custom Widget Areas',
    tags: ['Widgets', 'Sidebars', 'Theme Development'],
    difficulty: 'Beginner'
  },
  {
    id: 24,
    category: 'WordPress Theme Development',
    slug: 'enqueue-scripts-styles',
    title: 'Properly Enqueue Scripts and Styles',
    tags: ['JavaScript', 'CSS', 'wp_enqueue'],
    difficulty: 'Intermediate'
  },
  {
    id: 25,
    category: 'WordPress Theme Development',
    slug: 'add-theme-support',
    title: 'Enable WordPress Theme Features',
    tags: ['Theme Support', 'Features', 'add_theme_support'],
    difficulty: 'Beginner'
  },
  {
    id: 26,
    category: 'WordPress Theme Development',
    slug: 'register-navigation-menu',
    title: 'Register Custom Navigation Menus',
    tags: ['Menus', 'Navigation', 'Theme Development'],
    difficulty: 'Beginner'
  },
  {
    id: 27,
    category: 'WordPress Theme Development',
    slug: 'add-custom-image-sizes',
    title: 'Register Custom Image Sizes',
    tags: ['Images', 'Thumbnails', 'Media'],
    difficulty: 'Beginner'
  },
  {
    id: 28,
    category: 'WordPress Theme Development',
    slug: 'custom-post-meta-fields',
    title: 'Add Custom Meta Boxes',
    tags: ['Meta Boxes', 'Custom Fields', 'Post Meta'],
    difficulty: 'Intermediate'
  },
  {
    id: 29,
    category: 'WordPress Theme Development',
    slug: 'breadcrumbs-without-plugin',
    title: 'Add Breadcrumb Navigation',
    tags: ['Breadcrumbs', 'Navigation', 'SEO'],
    difficulty: 'Intermediate'
  },
  {
    id: 30,
    category: 'WordPress Theme Development',
    slug: 'custom-page-templates',
    title: 'Create Custom Page Templates',
    tags: ['Templates', 'Page Templates', 'Theme Development'],
    difficulty: 'Intermediate'
  },

  // Content Customization (31-45)
  {
    id: 31,
    category: 'WordPress Content',
    slug: 'change-excerpt-length',
    title: 'Customize Excerpt Length',
    tags: ['Excerpts', 'Content', 'Filters'],
    difficulty: 'Beginner'
  },
  {
    id: 32,
    category: 'WordPress Content',
    slug: 'custom-read-more-text',
    title: 'Change Read More Link Text',
    tags: ['Excerpts', 'Read More', 'Content'],
    difficulty: 'Beginner'
  },
  {
    id: 33,
    category: 'WordPress Content',
    slug: 'add-featured-image-rss',
    title: 'Add Featured Images to RSS Feed',
    tags: ['RSS', 'Featured Images', 'Feed'],
    difficulty: 'Beginner'
  },
  {
    id: 34,
    category: 'WordPress Content',
    slug: 'auto-featured-image',
    title: 'Automatically Set Featured Image',
    tags: ['Featured Images', 'Automation', 'Media'],
    difficulty: 'Intermediate'
  },
  {
    id: 35,
    category: 'WordPress Content',
    slug: 'custom-content-before-after-posts',
    title: 'Add Content Before/After Posts',
    tags: ['Content', 'Hooks', 'Filters'],
    difficulty: 'Beginner'
  },
  {
    id: 36,
    category: 'WordPress Content',
    slug: 'remove-p-tags-images',
    title: 'Remove P Tags Around Images',
    tags: ['Images', 'Formatting', 'Content'],
    difficulty: 'Beginner'
  },
  {
    id: 37,
    category: 'WordPress Content',
    slug: 'add-table-of-contents',
    title: 'Generate Table of Contents',
    tags: ['TOC', 'Content', 'Navigation'],
    difficulty: 'Advanced'
  },
  {
    id: 38,
    category: 'WordPress Content',
    slug: 'estimated-reading-time',
    title: 'Calculate Reading Time',
    tags: ['Reading Time', 'Content', 'UX'],
    difficulty: 'Intermediate'
  },
  {
    id: 39,
    category: 'WordPress Content',
    slug: 'custom-archive-title',
    title: 'Customize Archive Page Titles',
    tags: ['Archives', 'Titles', 'Templates'],
    difficulty: 'Beginner'
  },
  {
    id: 40,
    category: 'WordPress Content',
    slug: 'add-view-counter',
    title: 'Add Post View Counter',
    tags: ['Analytics', 'Post Views', 'Statistics'],
    difficulty: 'Intermediate'
  },

  // User Management (41-50)
  {
    id: 41,
    category: 'WordPress Users',
    slug: 'create-custom-user-role',
    title: 'Create Custom User Roles',
    tags: ['User Roles', 'Capabilities', 'Users'],
    difficulty: 'Intermediate'
  },
  {
    id: 42,
    category: 'WordPress Users',
    slug: 'add-user-profile-fields',
    title: 'Add Custom User Profile Fields',
    tags: ['User Meta', 'Profile Fields', 'Users'],
    difficulty: 'Intermediate'
  },
  {
    id: 43,
    category: 'WordPress Users',
    slug: 'disable-admin-bar-non-admins',
    title: 'Disable Admin Bar for Non-Admins',
    tags: ['Admin Bar', 'UX', 'Users'],
    difficulty: 'Beginner'
  },
  {
    id: 44,
    category: 'WordPress Users',
    slug: 'custom-login-page',
    title: 'Customize WordPress Login Page',
    tags: ['Login', 'Branding', 'Customization'],
    difficulty: 'Intermediate'
  },
  {
    id: 45,
    category: 'WordPress Users',
    slug: 'redirect-after-login',
    title: 'Redirect Users After Login',
    tags: ['Login', 'Redirects', 'UX'],
    difficulty: 'Intermediate'
  },
  {
    id: 46,
    category: 'WordPress Users',
    slug: 'show-total-users',
    title: 'Display User Count',
    tags: ['Users', 'Shortcodes', 'Statistics'],
    difficulty: 'Beginner'
  },
  {
    id: 47,
    category: 'WordPress Users',
    slug: 'last-login-time',
    title: 'Track User Last Login Time',
    tags: ['Users', 'Login', 'Tracking'],
    difficulty: 'Intermediate'
  },
  {
    id: 48,
    category: 'WordPress Users',
    slug: 'custom-avatar',
    title: 'Set Custom Default Avatar',
    tags: ['Avatars', 'Gravatar', 'Users'],
    difficulty: 'Beginner'
  },
  {
    id: 49,
    category: 'WordPress Users',
    slug: 'prevent-admin-access',
    title: 'Restrict Dashboard Access by Role',
    tags: ['Security', 'Users', 'Dashboard'],
    difficulty: 'Intermediate'
  },
  {
    id: 50,
    category: 'WordPress Users',
    slug: 'auto-logout-users',
    title: 'Auto Logout Inactive Users',
    tags: ['Security', 'Sessions', 'Users'],
    difficulty: 'Advanced'
  },

  // WooCommerce (51-65)
  {
    id: 51,
    category: 'WooCommerce',
    slug: 'hide-prices-not-logged-in',
    title: 'Hide Prices for Non-Logged Users',
    tags: ['WooCommerce', 'Pricing', 'Users'],
    difficulty: 'Intermediate'
  },
  {
    id: 52,
    category: 'WooCommerce',
    slug: 'custom-add-to-cart-text',
    title: 'Change Add to Cart Button Text',
    tags: ['WooCommerce', 'Buttons', 'Customization'],
    difficulty: 'Beginner'
  },
  {
    id: 53,
    category: 'WooCommerce',
    slug: 'remove-woocommerce-styles',
    title: 'Disable WooCommerce Styles',
    tags: ['WooCommerce', 'CSS', 'Performance'],
    difficulty: 'Beginner'
  },
  {
    id: 54,
    category: 'WooCommerce',
    slug: 'custom-product-tabs',
    title: 'Add Custom Product Tabs',
    tags: ['WooCommerce', 'Products', 'Tabs'],
    difficulty: 'Intermediate'
  },
  {
    id: 55,
    category: 'WooCommerce',
    slug: 'minimum-order-amount',
    title: 'Set Minimum Order Amount',
    tags: ['WooCommerce', 'Cart', 'Orders'],
    difficulty: 'Beginner'
  },
  {
    id: 56,
    category: 'WooCommerce',
    slug: 'custom-thank-you-page',
    title: 'Redirect to Custom Thank You Page',
    tags: ['WooCommerce', 'Checkout', 'Redirects'],
    difficulty: 'Intermediate'
  },
  {
    id: 57,
    category: 'WooCommerce',
    slug: 'change-product-quantity',
    title: 'Customize Product Quantity Inputs',
    tags: ['WooCommerce', 'Products', 'Cart'],
    difficulty: 'Intermediate'
  },
  {
    id: 58,
    category: 'WooCommerce',
    slug: 'add-custom-checkout-field',
    title: 'Add Custom Checkout Fields',
    tags: ['WooCommerce', 'Checkout', 'Fields'],
    difficulty: 'Advanced'
  },
  {
    id: 59,
    category: 'WooCommerce',
    slug: 'product-badge-sale',
    title: 'Custom Sale Badge',
    tags: ['WooCommerce', 'Products', 'Badges'],
    difficulty: 'Beginner'
  },
  {
    id: 60,
    category: 'WooCommerce',
    slug: 'remove-related-products',
    title: 'Hide Related Products',
    tags: ['WooCommerce', 'Products', 'Customization'],
    difficulty: 'Beginner'
  },
  {
    id: 61,
    category: 'WooCommerce',
    slug: 'change-products-per-page',
    title: 'Change Products Per Page',
    tags: ['WooCommerce', 'Shop', 'Pagination'],
    difficulty: 'Beginner'
  },
  {
    id: 62,
    category: 'WooCommerce',
    slug: 'custom-email-subject',
    title: 'Customize Order Email Subject',
    tags: ['WooCommerce', 'Emails', 'Orders'],
    difficulty: 'Intermediate'
  },
  {
    id: 63,
    category: 'WooCommerce',
    slug: 'auto-complete-orders',
    title: 'Auto Complete Virtual Orders',
    tags: ['WooCommerce', 'Orders', 'Automation'],
    difficulty: 'Intermediate'
  },
  {
    id: 64,
    category: 'WooCommerce',
    slug: 'disable-guest-checkout',
    title: 'Disable Guest Checkout',
    tags: ['WooCommerce', 'Checkout', 'Users'],
    difficulty: 'Beginner'
  },
  {
    id: 65,
    category: 'WooCommerce',
    slug: 'add-custom-payment-method',
    title: 'Create Custom Payment Gateway',
    tags: ['WooCommerce', 'Payments', 'Gateway'],
    difficulty: 'Advanced'
  },

  // SEO & Analytics (66-75)
  {
    id: 66,
    category: 'WordPress SEO',
    slug: 'add-schema-markup',
    title: 'Add Schema Markup to Posts',
    tags: ['SEO', 'Schema', 'Structured Data'],
    difficulty: 'Advanced'
  },
  {
    id: 67,
    category: 'WordPress SEO',
    slug: 'add-canonical-url',
    title: 'Add Canonical URLs',
    tags: ['SEO', 'Canonical', 'Duplicate Content'],
    difficulty: 'Intermediate'
  },
  {
    id: 68,
    category: 'WordPress SEO',
    slug: 'custom-meta-descriptions',
    title: 'Add Custom Meta Descriptions',
    tags: ['SEO', 'Meta Tags', 'Descriptions'],
    difficulty: 'Intermediate'
  },
  {
    id: 69,
    category: 'WordPress SEO',
    slug: 'add-open-graph-tags',
    title: 'Add Open Graph Meta Tags',
    tags: ['SEO', 'Social Media', 'Open Graph'],
    difficulty: 'Intermediate'
  },
  {
    id: 70,
    category: 'WordPress SEO',
    slug: 'generate-xml-sitemap',
    title: 'Generate XML Sitemap',
    tags: ['SEO', 'Sitemap', 'XML'],
    difficulty: 'Advanced'
  },
  {
    id: 71,
    category: 'WordPress SEO',
    slug: 'add-nofollow-external-links',
    title: 'Add Nofollow to External Links',
    tags: ['SEO', 'Links', 'Nofollow'],
    difficulty: 'Intermediate'
  },
  {
    id: 72,
    category: 'WordPress SEO',
    slug: 'redirect-attachment-pages',
    title: 'Redirect Attachment Pages to Parent',
    tags: ['SEO', 'Redirects', 'Attachments'],
    difficulty: 'Beginner'
  },
  {
    id: 73,
    category: 'WordPress SEO',
    slug: 'remove-category-from-url',
    title: 'Remove Category from URLs',
    tags: ['SEO', 'URLs', 'Permalinks'],
    difficulty: 'Intermediate'
  },
  {
    id: 74,
    category: 'WordPress SEO',
    slug: 'add-alt-text-images',
    title: 'Auto Add Alt Text to Images',
    tags: ['SEO', 'Images', 'Accessibility'],
    difficulty: 'Intermediate'
  },
  {
    id: 75,
    category: 'WordPress SEO',
    slug: 'add-twitter-cards',
    title: 'Add Twitter Card Meta Tags',
    tags: ['SEO', 'Social Media', 'Twitter'],
    difficulty: 'Intermediate'
  },

  // Admin Customization (76-85)
  {
    id: 76,
    category: 'WordPress Admin',
    slug: 'custom-admin-logo',
    title: 'Change WordPress Login Logo',
    tags: ['Admin', 'Login', 'Branding'],
    difficulty: 'Beginner'
  },
  {
    id: 77,
    category: 'WordPress Admin',
    slug: 'custom-dashboard-widgets',
    title: 'Add Custom Dashboard Widgets',
    tags: ['Admin', 'Dashboard', 'Widgets'],
    difficulty: 'Intermediate'
  },
  {
    id: 78,
    category: 'WordPress Admin',
    slug: 'remove-admin-menu-items',
    title: 'Remove Admin Menu Items',
    tags: ['Admin', 'Menus', 'UI'],
    difficulty: 'Beginner'
  },
  {
    id: 79,
    category: 'WordPress Admin',
    slug: 'custom-admin-footer',
    title: 'Change Admin Footer Text',
    tags: ['Admin', 'Footer', 'Branding'],
    difficulty: 'Beginner'
  },
  {
    id: 80,
    category: 'WordPress Admin',
    slug: 'add-admin-notice',
    title: 'Display Admin Notices',
    tags: ['Admin', 'Notices', 'Notifications'],
    difficulty: 'Intermediate'
  },
  {
    id: 81,
    category: 'WordPress Admin',
    slug: 'custom-post-columns',
    title: 'Add Custom Admin Columns',
    tags: ['Admin', 'Columns', 'Post List'],
    difficulty: 'Intermediate'
  },
  {
    id: 82,
    category: 'WordPress Admin',
    slug: 'hide-update-notices',
    title: 'Hide Update Notifications',
    tags: ['Admin', 'Updates', 'Notifications'],
    difficulty: 'Beginner'
  },
  {
    id: 83,
    category: 'WordPress Admin',
    slug: 'change-admin-color-scheme',
    title: 'Set Default Admin Color Scheme',
    tags: ['Admin', 'Colors', 'UI'],
    difficulty: 'Beginner'
  },
  {
    id: 84,
    category: 'WordPress Admin',
    slug: 'custom-help-tabs',
    title: 'Add Custom Help Tabs',
    tags: ['Admin', 'Help', 'Documentation'],
    difficulty: 'Advanced'
  },
  {
    id: 85,
    category: 'WordPress Admin',
    slug: 'remove-screen-options',
    title: 'Remove Screen Options Tab',
    tags: ['Admin', 'UI', 'Customization'],
    difficulty: 'Beginner'
  },

  // Advanced Features (86-100)
  {
    id: 86,
    category: 'WordPress Advanced',
    slug: 'custom-search-query',
    title: 'Customize WordPress Search',
    tags: ['Search', 'WP_Query', 'Advanced'],
    difficulty: 'Advanced'
  },
  {
    id: 87,
    category: 'WordPress Advanced',
    slug: 'add-ajax-functionality',
    title: 'Add AJAX to WordPress',
    tags: ['AJAX', 'JavaScript', 'Advanced'],
    difficulty: 'Advanced'
  },
  {
    id: 88,
    category: 'WordPress Advanced',
    slug: 'custom-api-endpoint',
    title: 'Create Custom REST API Endpoint',
    tags: ['REST API', 'API', 'Development'],
    difficulty: 'Advanced'
  },
  {
    id: 89,
    category: 'WordPress Advanced',
    slug: 'custom-cron-job',
    title: 'Schedule Custom WordPress Cron Jobs',
    tags: ['Cron', 'Automation', 'WP-Cron'],
    difficulty: 'Advanced'
  },
  {
    id: 90,
    category: 'WordPress Advanced',
    slug: 'custom-shortcodes',
    title: 'Create Custom Shortcodes',
    tags: ['Shortcodes', 'Content', 'Development'],
    difficulty: 'Intermediate'
  },
  {
    id: 91,
    category: 'WordPress Advanced',
    slug: 'database-optimization',
    title: 'Optimize WordPress Database',
    tags: ['Database', 'Performance', 'Optimization'],
    difficulty: 'Advanced'
  },
  {
    id: 92,
    category: 'WordPress Advanced',
    slug: 'multisite-network-setup',
    title: 'Enable WordPress Multisite',
    tags: ['Multisite', 'Network', 'Configuration'],
    difficulty: 'Advanced'
  },
  {
    id: 93,
    category: 'WordPress Advanced',
    slug: 'custom-post-status',
    title: 'Register Custom Post Statuses',
    tags: ['Post Status', 'Workflow', 'Development'],
    difficulty: 'Advanced'
  },
  {
    id: 94,
    category: 'WordPress Advanced',
    slug: 'white-label-wordpress',
    title: 'White Label WordPress Admin',
    tags: ['Branding', 'Admin', 'Client Sites'],
    difficulty: 'Intermediate'
  },
  {
    id: 95,
    category: 'WordPress Advanced',
    slug: 'custom-email-sender',
    title: 'Change WordPress Email From Address',
    tags: ['Email', 'SMTP', 'Configuration'],
    difficulty: 'Beginner'
  },
  {
    id: 96,
    category: 'WordPress Advanced',
    slug: 'add-maintenance-mode',
    title: 'Enable Maintenance Mode',
    tags: ['Maintenance', 'Coming Soon', 'Development'],
    difficulty: 'Intermediate'
  },
  {
    id: 97,
    category: 'WordPress Advanced',
    slug: 'custom-upload-mime-types',
    title: 'Allow Custom File Upload Types',
    tags: ['Media', 'Uploads', 'MIME Types'],
    difficulty: 'Intermediate'
  },
  {
    id: 98,
    category: 'WordPress Advanced',
    slug: 'debug-mode-logging',
    title: 'Enable Debug Mode and Logging',
    tags: ['Debug', 'Development', 'Troubleshooting'],
    difficulty: 'Intermediate'
  },
  {
    id: 99,
    category: 'WordPress Advanced',
    slug: 'custom-comment-system',
    title: 'Build Custom Comment System',
    tags: ['Comments', 'Development', 'Advanced'],
    difficulty: 'Advanced'
  },
  {
    id: 100,
    category: 'WordPress Advanced',
    slug: 'custom-walker-class',
    title: 'Create Custom Walker Class for Menus',
    tags: ['Menus', 'Walker', 'Advanced Development'],
    difficulty: 'Advanced'
  }
];

// Export helper for finding snippet by ID or slug
export function getSnippetData(identifier) {
  if (typeof identifier === 'number') {
    return wpSnippetsData.find(s => s.id === identifier);
  }
  return wpSnippetsData.find(s => s.slug === identifier);
}
