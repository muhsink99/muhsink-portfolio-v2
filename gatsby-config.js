module.exports = {
  siteMetadata: {
    title: "muhsink-portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
  ],
};
