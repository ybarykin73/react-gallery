import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICardProps } from '../../types/ICard';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (builder) => ({
    getGallery: builder.query<ICardProps[], string>({
      query: () => `paintings/`,
    }),
  }),
});

export const { useGetGalleryQuery } = galleryApi;
