module.exports = {
  siteMetadata: {
    title: `Unimus`,
    description: `Unimus makes Network Automation and Configuration Management easy.We aim to make automation, disaster recovery, change management
    and configuration auditing painless and affordable for a network of any size.`,
    author: `www.hancar.sk`,
  },
  plugins: [
    {
      resolve:'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo 1.png`, // This path is relative to the root of the site.
      },
      
    },
    {
      resolve:'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options: {
              maxWidth: 950,
             linkImagesToOriginal: false
            }
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
