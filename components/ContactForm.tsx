import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import { CenteredBodyParagrap } from '../styles/Main';

const ContactForm = () => {
  return (
    <Wrapper>
      <HeaderBig centered bold>
        Skontaktuj się ze mną!
      </HeaderBig>
      <CenteredBodyParagrap>
        Jeśli masz jakieś pytania lub wątpliwości - Napisz do mnie!
      </CenteredBodyParagrap>
    </Wrapper>
  );
};

export default ContactForm;
