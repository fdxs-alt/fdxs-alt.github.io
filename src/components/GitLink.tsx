import { StaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { ExternalLink } from './FacebookLink';
const GitLink = () => {
  return (
    <StaticQuery
      query={graphql`
        query GitQuery {
          file(relativePath: { eq: "git.png" }) {
            childImageSharp {
              fixed(quality: 100, width: 25) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <ExternalLink href="https://github.com/Przemocny">
          <GatsbyImage fixed={data.file.childImageSharp.fixed} />
        </ExternalLink>
      )}
    />
  );
};

export default GitLink;
