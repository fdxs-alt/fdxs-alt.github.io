import styled from 'styled-components';
import size from '../../utils/size';
import { Button } from '../BasicComponents';

export const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContactForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 500px;

  @media (max-width: ${size.tablet}) {
    width: 100%;
    margin: 2em 0;
  }
`;

export const ContactInput = styled.input`
  padding: 1em;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.grey_3};
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);
  margin-bottom: 2em;
  &::placeholder {
    color: ${(props) => props.theme.colors.grey_2};
  }
`;

export const ContactTextArea = styled.textarea`
  resize: none;
  padding: 1em;
  font-family: inherit;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.grey_3};
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);
  margin-bottom: 2em;
  &::placeholder {
    color: ${(props) => props.theme.colors.grey_2};
  }
`;

export const SendButton = styled(Button)`
  @media (max-width: ${size.tablet}) {
    align-self: center;
  }
`;
