import React from 'react';
import 'tachyons';
import Layout from '../common/layouts/main.js';
import PostContent from './post-content.js';
import { graphql } from 'gatsby';


export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="bg-white mv2" style={{gridArea: "content"}}>
        <PostContent
          post={post.html}
          title={post.frontmatter.title}
          category={post.frontmatter.category}
          date={post.frontmatter.date}
          image={post.frontmatter.postImage.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        category
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
