import { graphql, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { CenteredWrapper, GoBackLink, Container } from '../styles/Dev/Dev';
import { HeaderSmall } from '../styles/BasicComponents';

const development = () => {
  return (
    <StaticQuery
      query={graphql`
        query DevQuery {
          file(relativePath: { eq: "image_8.png" }) {
            childImageSharp {
              fixed(quality: 100, width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <CenteredWrapper>
          <Container>
            <GatsbyImage fixed={data.file.childImageSharp.fixed} />
            <div style={{ textAlign: 'center' }}>
              <HeaderSmall bold>Page in development</HeaderSmall>
              <GoBackLink to="/"> Go back</GoBackLink>
            </div>
          </Container>
        </CenteredWrapper>
      )}
    />
  );
};

export default development;
