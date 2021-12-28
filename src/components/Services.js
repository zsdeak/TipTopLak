import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Szolgáltatások"}){
        content
      }
    }
  `)
  return (
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
    />
  )
}

export default Services;
