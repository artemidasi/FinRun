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
import { RegistrationBody, RegistrationResponse } from 'types/registration';

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

const secureApi = createApi({
  tagTypes: [],
  keepUnusedDataFor: 86_400,
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_AUTH_API_URL,

    credentials: 'include',
  }),
  endpoints: (builder) => ({
    registration: builder.mutation<RegistrationResponse, RegistrationBody>({
      query: (body) => {
        return {
          url: 'registration',
          method: 'POST',
          body,
        };
      },
    }),
    confirm_email: builder.query<undefined, string>({
      query: (token) => {
        return {
          url: `confirm_email?token=${token}`,
          method: 'GET',
        };
      },
    }),
  }),
});

const authApi = createApi({
  tagTypes: [],
  keepUnusedDataFor: 86_400,
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    token: builder.mutation<
      {
        access_token: string;
      },
      {
        username: string;
        password: string;
      }
    >({
      query: ({ username, password }) => {
        return {
          url: 'token',
          method: 'POST',
          params: {
            grant_type: 'password_credentials',
            client_id: 'securityService',
            client_secret: 'securityService',
            username,
            password,
            scope: 'super',
          },
        };
      },
    }),
  }),
});

export const {} = mainApi;

export const { useTokenMutation } = authApi;

export const { useRegistrationMutation } = secureApi;

export default { mainApi, secureApi, authApi };
