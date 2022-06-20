import { NextRouter } from 'next/router';

export const handlerBeforeunload = (
  router: NextRouter,
  href: string,
  callback?: () => void,
) => {
  if (callback && typeof callback === 'function') {
    callback();
  }

  router.push(href);
};
