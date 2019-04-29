import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Pages Pulled from Wordpress Dynamically!
        </h1>
        <h4>{data.allWordpressPage.totalCount} Pages</h4>
        {data.allWordpressPage.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.slug}
              css={css`
                text-decoration: none;
                color: inherit;
                `}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.title}{" "}
              <span
                css={css`
                  color: #bbb;  
                `}
              >
                — {node.date}
              </span>
            </h3>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/> 
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allWordpressPage {
    totalCount
    edges {
      node {
        id
  			date(formatString: "MMMM Do, YYYY")
        slug
        title
        excerpt
        
      }
    }
  }
}
`