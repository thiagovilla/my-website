module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-101599702-3"],
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "5e93898ac811375192253b8a9362bc",
      },
    },
  ],
};
