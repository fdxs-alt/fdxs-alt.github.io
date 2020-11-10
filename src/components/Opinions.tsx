import React from 'react';
import Stepper from '../utils/Stepper';
import Woman2 from '../../images/woman_2.svg';
import { BodyParagraph, HeaderSmall } from '../styles/BasicComponents';
import { OpinionWrapper } from '../styles/home/OpinionComponent';

const Opinions = () => {
  return (
    <Stepper>
      <OpinionWrapper>
        <Woman2 />
        <HeaderSmall bold style={{ marginTop: '25px' }}>
          Anna Kostrzewska
        </HeaderSmall>
        <BodyParagraph centered>
          “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
          frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje
          umiejętności.”
        </BodyParagraph>
      </OpinionWrapper>
      <OpinionWrapper>
        <Woman2 />
        <HeaderSmall bold style={{ marginTop: '25px' }}>
          John Smith
        </HeaderSmall>
        <BodyParagraph centered>
          “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
          frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje
          umiejętności.”
        </BodyParagraph>
      </OpinionWrapper>
      <OpinionWrapper>
        <Woman2 />
        <HeaderSmall bold style={{ marginTop: '25px' }}>
          Jan Kowalski
        </HeaderSmall>
        <BodyParagraph centered>
          “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
          frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje
          umiejętności.”
        </BodyParagraph>
      </OpinionWrapper>
      <OpinionWrapper>
        <Woman2 />
        <HeaderSmall bold style={{ marginTop: '25px' }}>
          Jan Nowak
        </HeaderSmall>
        <BodyParagraph centered>
          “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
          frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje
          umiejętności.”
        </BodyParagraph>
      </OpinionWrapper>
      <OpinionWrapper>
        <Woman2 />
        <HeaderSmall bold style={{ marginTop: '25px' }}>
          Anna Nowak
        </HeaderSmall>
        <BodyParagraph centered>
          “Każdy zbiór pozwoli Ci przećwiczyć 130% zagadnień z dziedziny
          frontendu, niezależnie od poziomu na którym obecnie znajdują się Twoje
          umiejętności.”
        </BodyParagraph>
      </OpinionWrapper>
    </Stepper>
  );
};

export default Opinions;
