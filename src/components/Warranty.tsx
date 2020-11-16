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
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Approve = styled(motion.img)`
  width: 40%;

  @media (max-width: ${size.tablet}) {
    max-width: 400px;
    width: 80%;
  }
`;

const Warranty = () => {
  const { inView, ref } = useInView({ triggerOnce: true });

  return (
    <Wrapper>
      <HelloProgrammerSection ref={ref}>
        <Approve
          src={ApproveVector}
          animate={{ x: inView ? 0 : '-200%' }}
          initial={{ x: '-200%' }}
          transition={{
            duration: 0.3,
            delay: 0.2,
          }}
          alt="warranty"
        />
        <HelloBlock
          animate={{ x: inView ? 0 : '200%' }}
          initial={{ x: '200%' }}
          transition={{
            duration: 0.3,
            delay: 0.2,
          }}
        >
          <HeaderBig bold>Gwarancja jakości</HeaderBig>
          <HelloBodyParagrap>
            Jeśli w przeciągu roku od zakupu zechcesz zrezygnować z nauki
            programowania, powiesz mi szczerze dlaczego nie chcesz zostać
            programistą, a ja zwrócę Ci pieniądze – programowanie jest trudne i
            nie jest dla wszystkich i doskonale to rozumiem 🙂
          </HelloBodyParagrap>
          <Button primary name="check">
            Kliknij, aby sprawdzić!
          </Button>
        </HelloBlock>
      </HelloProgrammerSection>
    </Wrapper>
  );
};

export default Warranty;
