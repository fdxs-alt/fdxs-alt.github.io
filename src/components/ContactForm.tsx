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
  Label,
} from '../styles/Home/ContactComponent';
import { Comments } from '../styles/Home/ChoiceComponent';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView();
  return (
    <Wrapper>
      <HeaderBig centered bold>
        Skontaktuj się ze mną!
      </HeaderBig>
      <CenteredBodyParagrap>
        Jeśli masz jakieś pytania lub wątpliwości - Napisz do mnie!
      </CenteredBodyParagrap>
      <ContentWrapper ref={ref}>
        <Comments
          src={CommentsVector}
          animate={{ x: inView ? 0 : '-200%' }}
          initial={{ x: '-200%' }}
          transition={{
            duration: 0.3,
            delay: 0.2,
          }}
          alt="comments"
        />
        <ContactForm
          animate={{ x: inView ? 0 : '200%' }}
          initial={{ x: '200%' }}
          transition={{
            duration: 0.3,
            delay: 0.2,
          }}
        >
          <Label htmlFor="message">Twoja wiadomość</Label>
          <ContactTextArea
            required
            rows={8}
            placeholder="np. Ten zestaw mi naprawdę pomógł!"
          />
          <Label htmlFor="name"> Twoje imię i nazwisko</Label>
          <ContactInput type="text" required placeholder="np. Jan Kowalski" />
          <Label htmlFor="email">Twój adres email</Label>
          <ContactInput
            type="email"
            required
            placeholder="np. jan@kowalski.pl"
          />
          <SendButton primary name="send">
            Wyślij wiadomość
          </SendButton>
        </ContactForm>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
