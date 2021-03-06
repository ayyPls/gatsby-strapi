module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  
  {
    resolve:"gatsby-source-strapi",
    options: {
      apiURL: 'https://strapi.pro.atlas-ilya.online',
      collectionTypes: [],
      singleTypes: ['egor'],
      queryLimit: 1000
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};