import { NextRouter, useRouter } from 'next/router';

export type CustomRouter = NextRouter & {
  query: QueryParams;
};

export interface QueryParams {
  id?: string;
}

export const useCustomRouter = () => {
  const router: CustomRouter = useRouter();

  return router;
};
