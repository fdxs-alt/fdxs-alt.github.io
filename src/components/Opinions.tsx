import React from 'react';
import Stepper from '../utils/Stepper';
import Woman2 from '../../images/woman_2.svg';
import { BodyParagraph, HeaderSmall } from '../styles/BasicComponents';
import { OpinionWrapper } from '../styles/Home/OpinionComponent';
import { AnimatePresence } from 'framer-motion';

const variants = {
  initial: { x: -300, opacity: 0 },
  ani: { zIndex: 10, x: 0, opacity: 1 },
};

const Opinions = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Stepper>
        <OpinionWrapper
          variants={variants}
          initial="initial"
          animate="ani"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          exit="exit"
        >
          <Woman2 />
          <HeaderSmall bold style={{ marginTop: '25px' }}>
            Anna Kostrzewska
          </HeaderSmall>
          <BodyParagraph centered>
            “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
            frontendu, niezależnie od poziomu na którym obecnie znajdują się
            Twoje umiejętności.”
          </BodyParagraph>
        </OpinionWrapper>
        <OpinionWrapper
          variants={variants}
          initial="initial"
          animate="ani"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          exit="exit"
        >
          <Woman2 />
          <HeaderSmall bold style={{ marginTop: '25px' }}>
            John Smith
          </HeaderSmall>
          <BodyParagraph centered>
            “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
            frontendu, niezależnie od poziomu na którym obecnie znajdują się
            Twoje umiejętności.”
          </BodyParagraph>
        </OpinionWrapper>
        <OpinionWrapper
          variants={variants}
          initial="initial"
          animate="ani"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          exit="exit"
        >
          <Woman2 />
          <HeaderSmall bold style={{ marginTop: '25px' }}>
            Jan Kowalski
          </HeaderSmall>
          <BodyParagraph centered>
            “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
            frontendu, niezależnie od poziomu na którym obecnie znajdują się
            Twoje umiejętności.”
          </BodyParagraph>
        </OpinionWrapper>
        <OpinionWrapper
          variants={variants}
          initial="initial"
          animate="ani"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          exit="exit"
        >
          <Woman2 />
          <HeaderSmall bold style={{ marginTop: '25px' }}>
            Jan Nowak
          </HeaderSmall>
          <BodyParagraph centered>
            “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
            frontendu, niezależnie od poziomu na którym obecnie znajdują się
            Twoje umiejętności.”
          </BodyParagraph>
        </OpinionWrapper>
        <OpinionWrapper
          variants={variants}
          initial="initial"
          animate="ani"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          exit="exit"
        >
          <Woman2 />
          <HeaderSmall bold style={{ marginTop: '25px' }}>
            Anna Nowak
          </HeaderSmall>
          <BodyParagraph centered>
            “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
            frontendu, niezależnie od poziomu na którym obecnie znajdują się
            Twoje umiejętności.”
          </BodyParagraph>
        </OpinionWrapper>
      </Stepper>
    </AnimatePresence>
  );
};

export default Opinions;
