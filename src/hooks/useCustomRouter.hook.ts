import { NextRouter, useRouter } from 'next/router';

export type CustomRouter = NextRouter & {
  query: QueryParams;
};

export interface QueryParams {
  day_start?: string;
  month_start?: string;
  year_start?: string;
  day_end?: string;
  month_end?: string;
  year_end?: string;
  id?: string;
}

export const useCustomRouter = () => {
  const router: CustomRouter = useRouter();

  return router;
};
