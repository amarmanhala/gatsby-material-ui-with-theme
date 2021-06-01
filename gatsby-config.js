module.exports = {
  siteMetadata: {
    title: "nft",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToTheme: "src/theme.js",
      },
    },
  ],
};
