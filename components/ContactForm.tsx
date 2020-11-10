import React from 'react';
import { Button, HeaderBig, Wrapper } from '../styles/BasicComponents';
import { CenteredBodyParagrap } from '../styles/Main';
import styled from 'styled-components';
import size from '../utils/size';
import CommentsVector from '../images/comments.svg';

const Comments = styled(CommentsVector)`
  width: fit-content;
`;
const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ContactForm = styled.form`
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

const ContactInput = styled.input`
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

const ContactTextArea = styled.textarea`
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

const SendButton = styled(Button)`
  @media (max-width: ${size.tablet}) {
    align-self: center;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <HeaderBig centered bold>
        Skontaktuj się ze mną!
      </HeaderBig>
      <CenteredBodyParagrap>
        Jeśli masz jakieś pytania lub wątpliwości - Napisz do mnie!
      </CenteredBodyParagrap>
      <ContentWrapper>
        <div>
          <Comments />
        </div>
        <ContactForm>
          <ContactTextArea
            required
            rows={8}
            placeholder="np. Ten zestaw mi naprawdę pomógł!"
          />
          <ContactInput type="text" required placeholder="np. Jan Kowalski" />
          <ContactInput
            type="email"
            required
            placeholder="np. jan@kowalski.pl"
          />
          <SendButton primary>Wyślij wiadomość</SendButton>
        </ContactForm>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
