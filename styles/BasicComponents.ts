import styled from 'styled-components';

interface IHeaderVariants {
  bold?: boolean;
  centered?: boolean;
}

interface IBodyVariants extends IHeaderVariants {
  sm?: boolean;
}

interface IButtonVariant {
  primary?: boolean;
}

export const HeaderBig = styled.h1<IHeaderVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: 34px;
  margin-bottom: 24px;
  text-align: ${(props) => (props.centered ? 'center' : 'start')};
`;
export const HeaderMedium = styled.h1<IHeaderVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: 26px;
  margin-bottom: 10px;
`;
export const HeaderSmall = styled.h1<IHeaderVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: 22px;
  margin-bottom: 16px;
  text-align: ${(props) => (props.centered ? 'center' : 'start')};
  line-height: 24px;
`;
export const BodyParagraph = styled.p<IBodyVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: ${(props) => (props.sm ? '14px' : '16px')};
  color: ${(props) => props.theme.colors.grey_2};
  text-align: ${(props) => (props.centered ? 'center' : 'start')};
  line-height: 24px;
`;

export const Button = styled.button<IButtonVariant>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.grey_1};
  border-radius: 4px;
  font-size: 16px;
  padding: 14px 24px;
  font-weight: 700;
  border: none;
  color: ${(props) =>
    props.primary ? props.theme.colors.grey_1 : props.theme.colors.white};
  cursor: pointer;
`;
export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  max-width: 1400px;
  margin: 0 auto 200px auto;
`;

export const FlexEndWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
