import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import SEO from "../components/seo"
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export default ({ data, location, pageContext }) => (
	<Layout>
		<SEO
			pagetitle="ブログ"
			pagedesc="ESSENTIALSのブログです"
			pagepath={location.pathname}
		/>
		<section className="content bloglist">
			<div className="container">
				<h1 className="bar">RECENT POSTS</h1>
				<div className="posts">
					{data.allContentfulBlogPost.edges.map(({ node }) => (
					<article className="post" key={node.id}>
						<Link to={`/blog/post/${node.slug}/`}>
							<figure>
								<GatsbyImage
									image={node.eyecatch.gatsbyImageData}
									alt={node.eyecatch.description}
									style={{ height: "100%" }}
								/>
							</figure>
							<h3>{node.title}</h3>
						</Link>
					</article>
					))}
				</div>

				<ul className="pagenation">
					{!pageContext.isFirst && (
					<li className="prev">
						<Link
							to={
								pageContext.currentPage === 2
								? `/blog/`
								: `/blog/${pageContext.currentPage - 1}/`
							}
							rel="prev"
						>
							<FontAwesomeIcon icon={faChevronLeft} />
							<span>前のページ</span>
						</Link>
					</li>
					)}
					{!pageContext.isLast && (
					<li className="next">
						<Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
							<span>次のページ</span>
							<FontAwesomeIcon icon={faChevronRight} />
						</Link>
					</li>
					)}
				</ul>
			</div>
		</section>
	</Layout>
)

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allContentfulBlogPost(
			sort: {order: DESC, fields: publishDate}
			skip: $skip
			limit: $limit
		) {
			edges {
				node {
					title
					id
					slug
					eyecatch {
						gatsbyImageData(width: 500, layout: CONSTRAINED)
						description
					}
				}
			}
		}
	}
`