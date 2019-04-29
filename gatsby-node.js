const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
    ).then(result => {
        result.data.allWordpressPage.edges.forEach(({ node }) => {
            createPage({
              path: node.slug,
              component: path.resolve(`./src/templates/page.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
              },
            })
          })
        })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allTestXlsxSheet1 {
      totalCount
        edges {
        node {
          id
          OrderDate
          Region
          Rep
          Item
          UnitCost
          Total
        }
      }
    }
  }
  `
  ).then(result => {
      result.data.allTestXlsxSheet1.edges.forEach(({ node }) => {
          createPage({
            path: 'excel',
            component: path.resolve(`./src/templates/excelData.js`),
            context: {
              id: node.id,
            },
          })
        })
      })
}