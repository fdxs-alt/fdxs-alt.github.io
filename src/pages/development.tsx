import { graphql, Link, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { HeaderSmall } from '../styles/BasicComponents';
import styled from 'styled-components';

const CenteredWrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const GoBackLink = styled(Link)`
  color: ${(props) => props.theme.colors.grey_1};
  font-weight: 700;
  font-size: 20px;
`;

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
