import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Rólunk"}){
        content
      }
    }
  `)
  return (
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
    />
  )
}

export default About;
