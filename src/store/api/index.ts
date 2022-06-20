import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  tagTypes: [],
  keepUnusedDataFor: 86_400,
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,

    credentials: 'include',
  }),
  endpoints: () => ({}),
});

export const {} = api;

export default api;
