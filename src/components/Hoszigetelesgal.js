import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
    allImageSharp(filter: {fluid: {originalName: {regex: "/hoszigeteles/"}}}) {
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
      <div style={{Width: '95vw', margin: '20px auto', padding: '0 5vw'}}>
      <h3>Hőszigetelés</h3>
        {data.allImageSharp.edges.map(edge =>
          <Img className="img" fluid={edge.node.fluid} />
        )}
      </div>
    </div>
  )
}
