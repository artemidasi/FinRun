import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { unresctrictedPages } from 'constants/links';
import Router from 'next/router';
import { Links } from 'types/links';
import { RegistrationBody } from 'types/registration';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  const unauthErrorOnRestrictedPage =
    result.error &&
    result.error.status === 401 &&
    !unresctrictedPages.includes(window.location.pathname);

  if (unauthErrorOnRestrictedPage) {
    Router.push(Links.auth);
  }
  return result;
};

const mainApi = createApi({
  tagTypes: [],
  keepUnusedDataFor: 86_400,
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

const authApi = createApi({
  tagTypes: [],
  keepUnusedDataFor: 86_400,
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,

    credentials: 'include',
  }),
  endpoints: (builder) => ({
    registration: builder.mutation<string, RegistrationBody>({
      query: (body) => {
        return {
          url: 'registration',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {} = mainApi;

export const {} = authApi;

export default { mainApi, authApi };
