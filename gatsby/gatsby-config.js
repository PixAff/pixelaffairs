// import dotenv from "dotenv";

// dotenv.config({ path: ".env" });

require("dotenv").config({
  path: ".env",
});

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: "Pixel Affairs",
    siteUrl: "https://pixelaffairs.com",
    description:
      "pixel affairs - Stefan Sarow, Pixera, Watchout Operator Berlin, Full Stack Web Development",
  },
  plugins: [
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
