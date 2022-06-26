import { useState, useCallback } from 'react';
import { useMount, useUnmount } from 'react-use';

const isWindow = typeof window !== 'undefined';

interface Dimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): Dimensions => {
  if (isWindow) {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }

  return {
    width: 0,
    height: 0,
  };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useMount(() => {
    if (isWindow) window.addEventListener('resize', handleResize);
  });

  useUnmount(() => {
    if (isWindow) window.removeEventListener('resize', handleResize);
  });

  return windowDimensions;
};

export default useWindowDimensions;
