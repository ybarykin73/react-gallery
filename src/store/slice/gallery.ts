import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (builder) => ({
    getGallery: builder.query<string, string>({
      query: () => `paintings/`,
    }),
  }),
});

export const { useGetGalleryQuery } = galleryApi;
