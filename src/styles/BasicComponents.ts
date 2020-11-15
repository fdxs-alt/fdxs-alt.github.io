import { motion } from 'framer-motion';
import styled from 'styled-components';
import size from '../utils/size';

interface IHeaderVariants {
  bold?: boolean;
  centered?: boolean;
  end?: boolean;
}

interface IBodyVariants extends IHeaderVariants {
  sm?: boolean;
}

interface IButtonVariant {
  primary?: boolean;
}

export const HeaderBig = styled(motion.h1)<IHeaderVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: 34px;
  margin-bottom: 24px;
  text-align: ${(props) =>
    props.centered ? 'center' : props.end ? 'end' : 'start'};

  @media (max-width: ${size.tablet}) {
    text-align: center;
  }
`;
export const HeaderMedium = styled.h1<IHeaderVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: 26px;
  margin-bottom: 10px;
  text-align: ${(props) => (props.centered ? 'center' : 'start')};
`;
export const HeaderSmall = styled.h1<IHeaderVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: 22px;
  margin-bottom: 16px;
  text-align: ${(props) => (props.centered ? 'center' : 'start')};
  line-height: 24px;
  line-height: 130%;
`;
export const BodyParagraph = styled.p<IBodyVariants>`
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: ${(props) => (props.sm ? '14px' : '16px')};
  color: ${(props) => props.theme.colors.grey_2};
  text-align: ${(props) =>
    props.centered ? 'center' : props.end ? 'end' : 'start'};

  line-height: 24px;
  margin-bottom: 16px;
`;

export const Button = styled(motion.button)<IButtonVariant>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.white};
  border-radius: 4px;
  font-size: 16px;
  padding: 14px 24px;
  font-weight: 700;
  border: ${(props) =>
    props.primary ? 'none' : `1 px solid ${props.theme.colors.grey_3}`};
  color: ${(props) =>
    props.primary ? props.theme.colors.grey_1 : props.theme.colors.grey_1};
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
  max-width: 1000px;
  margin: 0 auto 150px auto;

  @media (max-width: ${size.laptop}) {
    width: 75%;
  }

  @media (max-width: ${size.tablet}) {
    width: 80%;
    margin: 0 auto 100px auto;
  }

  @media (max-width: ${size.small}) {
    width: 90%;
    margin: 0 auto 50px auto;
  }
`;

export const FlexEndWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
