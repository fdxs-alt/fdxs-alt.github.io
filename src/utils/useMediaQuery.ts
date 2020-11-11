import { useEffect, useState } from 'react';

function useMediaQuery(mediaQuery: string) {
  const [isVerified, setIsVerified] = useState(
    typeof window !== 'undefined' && !!window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [mediaQuery]);

  return isVerified;
}

export default useMediaQuery;
