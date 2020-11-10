import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import { CenteredBodyParagrap } from '../styles/Main';

import CommentsVector from '../../images/png/comments.png';
import {
  ContentWrapper,
  ContactForm,
  ContactTextArea,
  ContactInput,
  SendButton,
} from '../styles/Home/ContactComponent';
import { Comments } from '../styles/Home/ChoiceComponent';

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
        <Comments src={CommentsVector} />
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
