import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Rétköz utca"}) {
      content
      title
      }
      file(name: {regex: "/sldrkoz/"}) {
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
        <Img className="img" fluid={data.file.childImageSharp.fluid} />
        <h2 className="description" dangerouslySetInnerHTML={{ __html: data.wordpressPage.title }} />
        <h4 className="description" dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
    </div>
  )
}
