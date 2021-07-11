module.exports = {
  siteMetadata: {
    siteUrl: "https://www.mbabetchki.com",
    title: "MB Web Development",
    author: "Mike Babetchki",
    description: "A portfolio website showcasing my recent work.",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
