import styled from "styled-components"

interface IHeaderVariants {
  bold?: boolean
}

interface IBodyVariants extends IHeaderVariants {
  sm?: boolean
}

interface IButtonVariant {
  primary?: boolean
}

export const HeaderBig = styled.h1<IHeaderVariants>`
  font-weight: ${props => (props.bold ? "700" : "400")};
  font-size: 34px;
`
export const HeaderMedium = styled.h1<IHeaderVariants>`
  font-weight: ${props => (props.bold ? "700" : "400")};
  font-size: 26px;
`
export const HeaderSmall = styled.h1<IHeaderVariants>`
  font-weight: ${props => (props.bold ? "700" : "400")};
  font-size: 22px;
`
export const BodyParagraph = styled.p<IBodyVariants>`
  font-weight: ${props => (props.bold ? "700" : "400")};
  font-size: ${props => (props.sm ? "14px" : "16px")};
`

export const Button = styled.button<IButtonVariant>`
  background-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.grey_1};
  border-radius: 4px;
  font-size: 16px;
  padding: 14px 24px;
  color: ${props =>
    props.primary ? props.theme.colors.grey_1 : props.theme.colors.white};
`
export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background-color: ${props => props.theme.colors.white};
`

export const Container = styled.div`
  width: 100%;
`
