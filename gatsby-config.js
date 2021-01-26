module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Catatan Random`,
    name: `Mahdy Syafiqa J`,
    siteUrl: `https://safikka.github.io/blog/`,
    description: `Cerita random dan realisasinya di kehidupan`,
    hero: {
      heading: `Cerita random dan pengaplikasiannya di kehidupan`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/safikka`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/mhdysyfq/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mahdysyafiqajannata/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        // mailchimp: true, // make sure this is true!
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Catatan Random`,
        short_name: `Mahdy Syafiqa J`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: "UA-25918076-1",
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     // add your MC list endpoint here; see plugin repo for instructions
    //     endpoint: 'https://github.us8.list-manage.com/subscribe/post?u=8dbe735d8d5499c1098e8f8ff&amp;id=6324a629f0',
    //   },
    // },
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77,
        height: 400,
        related: false,
        noIframeBorder: true
      },
    },
  ],
};
