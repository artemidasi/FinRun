import { NextRouter, useRouter } from 'next/router';

import { GlobalSort } from 'store/api/type';

import { StatusQuery } from 'types/presentation';

type CustomRouter = NextRouter & {
  query: QueryParams;
};

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

interface QueryParams {
  id?: string;
  sort?: GlobalSort;
  sort_direction?: SortDirection;
  email?: string;
  status?: StatusQuery;
}

export const useCustomRouter = () => {
  const router: CustomRouter = useRouter();

  return router;
};
