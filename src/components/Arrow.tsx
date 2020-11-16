import { navigate } from 'gatsby';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  PointerArrows,
  PrevPostContent,
  NextPostContent,
} from '../styles/ExamplePost';

const Arrow = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <PointerArrows ref={ref}>
      <PrevPostContent
        animate={{ x: inView ? 0 : '300%' }}
        initial={{ x: '300%' }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        onClick={() => navigate('/blog/example')}
        onKeyPress={(e) => {
          if (e.key === 'enter') navigate('/blog/example');
        }}
        tabIndex={0}
      >
        <p style={{ width: '310px', padding: '8px', textAlign: 'center' }}>
          Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad
        </p>
      </PrevPostContent>
      <NextPostContent
        onClick={() => navigate('/blog/example')}
        animate={{ x: inView ? 0 : '-300%' }}
        initial={{ x: '-300%' }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        tabIndex={0}
      >
        <p style={{ width: '310px', padding: '8px', textAlign: 'center' }}>
          Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad
        </p>
      </NextPostContent>
    </PointerArrows>
  );
};

export default Arrow;
