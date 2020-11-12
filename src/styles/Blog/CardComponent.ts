import styled from 'styled-components';

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  border-radius: 6px;

  border: 1px solid ${(props) => props.theme.colors.grey_4};
`;

export const BlogImage = styled.img`
  width: 100%;
`;

export const ContentContainer = styled.div`
  padding: 16px 24px;
`;

export const DateTitle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.grey_1};
  padding: 6px 12px;
  width: fit-content;
`;

export const Tag = styled.div`
  color: ${(props) => props.theme.colors.grey_2};
  border: 1px solid ${(props) => props.theme.colors.grey_4};
  padding: 6px 12px;
`;

export const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;
