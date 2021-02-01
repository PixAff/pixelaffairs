import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: "Pixel Affairs",
    siteUrl: "https://pixelaffairs.com",
    description:
      "pixel affairs - Stefan Sarow, Pixera, Watchout Operator Berlin, Full Stack Web Development",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "3a0aknih",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
