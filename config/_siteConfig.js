/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'MutateAPP',
  tagline: 'MutateAPP. El mutante del texto y los números',
  featureImage: '/uploads/home-hero.jpg',
  logo: 'logo-component', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: true,
    id: 'UA-148189390-1'
  },
  mainMenu: [
    {
      name: 'Blog',
      link: '/blog'
    },
    {
      name: 'Nosotros',
      link: '/nosotros'
    },
    {
      name: 'Contacto',
      link: '/contacto'
    },
    {
      name: 'Herramientas',
      link: '/herramientas'
    }
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Disqus
  disqus: {
    on: false,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: 'blog-danielkelly-io' // 'blog-danielkelly-io'
  },

  // Newsletter Subscribe
  newsletter: {
    on: false,
    heading: 'Suscribete a nuestro newsletter',
    btnText: 'SUSCRIBEME',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: true,
      formAction:
        'https://danielkelly.us3.list-manage.com/subscribe/post?u=d3c2e762b66a2353d0bc29bf3&amp;id=2abeaa06e0'
    },
    custom: {
      on: false,
      formAction:
        'https://danielkelly.us3.list-manage.com/subscribe/post?u=d3c2e762b66a2353d0bc29bf3&amp;id=2abeaa06e0'
    }
  },

  // Categories
  categories: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for categories if set here)
    theme: null // See card.theme (can be unique for categories if set here)
  },

  // Posts
  posts: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    displayAuthor: true,
    date: {
      display: true
    },
    perRow: 3,
    perPage: 6
  }
}

export const CMS = theCMS
