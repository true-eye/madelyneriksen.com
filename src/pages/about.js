import React from 'react';
import 'tachyons';
import Layout from '../common/layouts/main.js';
import AboutContent from '../about/about-content.js';
import { graphql } from 'gatsby';


export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="bg-white mv2" style={{gridArea: "content"}}>
        <AboutContent
          post={post.html}
          title={post.frontmatter.title}
          image={post.frontmatter.postImage.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "about"}}) {
      html
      frontmatter {
        title
        postImage {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`