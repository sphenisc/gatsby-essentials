import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = ({ data }) => {
  return (
	<Layout>
		<section className="hero">
			<figure>
				<Img
					fluid={data.hero.childImageSharp.fluid}
					alt=""
					style={{ height: "100%" }}
				/>
			</figure>
			<div className="catch">
				<h1>
					There is no love sincerer than<br />
					the love of food.
				</h1>
				<p>食物を愛するよりも誠実な愛はないabc ― バーナード・ショー</p>
			</div>
			<div className="wave">
				<svg xmlns="//www.w3.org/2000/svg" viewBox="0 0 1366 229.5" fill="#fff"><path d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z" opacity=".53" /><path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z" /></svg>
			</div>
		</section>
		<section className="food">
			<div className="container">
				<h2 className="bar">Food <span>Essence</span></h2>
				<div className="details">
					<div className="detail">
						<figure>
							<Img fluid={data.fruit.childImageSharp.fluid} alt="" />
						</figure>
						<h3>フルーツ</h3>
						<p>FRUIT</p>
						<p>
							甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。
						</p>
					</div>
					<div className="detail">
						<figure>
							<Img fluid={data.grain.childImageSharp.fluid} alt="" />
						</figure>
						<h3>穀物</h3>
						<p>GRAIN</p>
						<p>
							食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。
						</p>
					</div>
					<div className="detail">
						<figure>
							<Img fluid={data.beverage.childImageSharp.fluid} alt="" />
						</figure>
						<h3>飲み物</h3>
						<p>BEVERAGE</p>
						<p>
							リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className="photo">
			<h2 className="sr-only">Photo</h2>
			<figure>
				<Img
					fluid={data.berry.childImageSharp.fluid}
					alt="赤く熟したベリー"
					style={{ height: "100%" }}
				/>
			</figure>
		</section>
	</Layout>
  )
}

export default IndexPage

export const query = graphql`
	query {
		hero: file(relativePath: {eq: "hero.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 1600) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		fruit: file(relativePath: {eq: "fruit.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 320) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		grain: file(relativePath: {eq: "grain.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 320) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		beverage: file(relativePath: {eq: "beverage.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 320) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		berry: file(relativePath: {eq: "berry.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 1600) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		pattern: file(relativePath: {eq: "pattern.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 1920, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
