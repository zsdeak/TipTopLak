import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
    allImageSharp(filter: {fluid: {originalName: {regex: "/szatmar/", ne: "slide_szatmar.jpg"}}}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <div style={{Width: '95vw', margin: '20px auto', padding: '0 7vw'}}>
      <div className="back">
        <Link to="/">VISSZA</Link>
      </div>
      <h3>Szatmár utca</h3>
        {data.allImageSharp.edges.map(edge =>
          <Img className="img" fluid={edge.node.fluid} />
        )}
      </div>
    </div>
  )
}
