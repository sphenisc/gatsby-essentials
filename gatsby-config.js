module.exports = {
	siteMetadata: {
		title: `ESSENTIALS`,
		description: `おいしい食材と食事を探求するサイト`,
		lang: `ja`,
		siteUrl: `https://ssg2.netlify.app`,
		locale: `ja_JP`,
		fbappid: `xxxxxxxx`,
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `ESSENTIALS エッセンシャルズ`,
				short_name: `ESSENTIALS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#477294`,
				display: `standalone`,
				icon: `src/images/icon.png`,
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		`gatsby-plugin-image`,
	],
}
