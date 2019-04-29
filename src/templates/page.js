import React, {Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"

class PageTemplate extends Component {
  render() {
      const currentPage = this.props.data.wordpressPage

      console.log(currentPage)

      return (
        <Layout>
          <Helmet title={currentPage.yoast_meta.yoast_wpseo_title} defer={false}>
           <meta name="description" content={currentPage.yoast_meta.yoast_wpseo_metadesc} />
          </Helmet>
            <div>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <p dangerouslySetInnerHTML={{__html: currentPage.content}}/>
            </div>
        </Layout>
      )
  }
}

export default PageTemplate

export const pageQuery = graphql`
query currentPageQuery($slug: String!) {
  wordpressPage(slug: { eq: $slug }) {
        yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_metadesc
        }
        title
        content
        slug
        id
        date(formatString: "MMMM DD, YYYY")
    }
  }
`