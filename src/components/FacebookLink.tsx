import { StaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
export const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  width: 50px;
  text-align: center;

  &:focus {
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

const FacebookLink = () => {
  return (
    <StaticQuery
      query={graphql`
        query FBQuery {
          file(relativePath: { eq: "fb.png" }) {
            childImageSharp {
              fixed(quality: 100, width: 12) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <ExternalLink href="https://www.facebook.com/academylocalhost">
          <GatsbyImage fixed={data.file.childImageSharp.fixed} />
        </ExternalLink>
      )}
    />
  );
};

export default FacebookLink;
