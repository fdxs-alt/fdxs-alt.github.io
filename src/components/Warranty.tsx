import React from 'react';
import styled from 'styled-components';
import size from '../utils/size';
import ApproveVector from '../../images/png/approve.png';
import { HeaderBig, Button, Wrapper } from '../styles/BasicComponents';
import {
  HelloProgrammerSection,
  HelloBlock,
  HelloBodyParagrap,
} from '../styles/Main';

const Approve = styled.img`
  width: 40%;

  @media (max-width: ${size.tablet}) {
    max-width: 400px;
    width: 80%;
  }
`;

const Warranty = () => {
  return (
    <Wrapper>
      <HelloProgrammerSection>
        <Approve src={ApproveVector} />
        <HelloBlock>
          <HeaderBig bold>Gwarancja jakości</HeaderBig>
          <HelloBodyParagrap>
            Jeśli w przeciągu roku od zakupu zechcesz zrezygnować z nauki
            programowania, powiesz mi szczerze dlaczego nie chcesz zostać
            programistą, a ja zwrócę Ci pieniądze – programowanie jest trudne i
            nie jest dla wszystkich i doskonale to rozumiem 🙂
          </HelloBodyParagrap>
          <Button primary>Kliknij, aby sprawdzić!</Button>
        </HelloBlock>
      </HelloProgrammerSection>
    </Wrapper>
  );
};

export default Warranty;
