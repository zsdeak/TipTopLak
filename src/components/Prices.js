import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Prices = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Árak"}){
        content
      }
    }
  `)
  return (
    <div className="prContainer" dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
    />
  )
}

export default Prices;
