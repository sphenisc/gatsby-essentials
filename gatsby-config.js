module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "mysite20211120",
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
	],
};
