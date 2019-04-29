import React, {Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"

class PageTemplate extends Component {
  render() {
      const data1 = this.props.data.allTestXlsxSheet1.edges
      return (
        <Layout>
          <table>
            <thead>
              <tr>
                <th>OrderDate</th>
                <th>Region</th>
                <th>Rep</th>
                <th>Item</th>
                <th>UnitCost</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((row, i) => (
                <tr key={`${row.node.OrderDate} ${i}`}>
                  <td>{row.node.OrderDate}</td>
                  <td>{row.node.Region}</td>
                  <td>{row.node.Rep}</td>
                  <td>{row.node.Item}</td>
                  <td>{row.node.UnitCost}</td>
                  <td>{row.node.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
     </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
{
  allTestXlsxSheet1 {
    totalCount
      edges {
      node {
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