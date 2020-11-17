import { StaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { HeaderSmall } from '../styles/BasicComponents';
import { CenteredWrapper, GoBackLink, Container } from '../styles/Dev/Dev';

const ErrorPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query ErrorQuery {
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
              <HeaderSmall bold>Page not found</HeaderSmall>
              <GoBackLink to="/"> Go back</GoBackLink>
            </div>
          </Container>
        </CenteredWrapper>
      )}
    />
  );
};

export default ErrorPage;
