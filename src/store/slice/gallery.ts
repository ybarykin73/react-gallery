import { createApi } from '@reduxjs/toolkit/query/react';

import axiosBaseQuery from '../interceptor';
import { ICardProps } from '../../types/ICard';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://test-front.framework.team/',
  }),
  endpoints: (builder) => ({
    getGallery: builder.query<ICardProps[], string>({
      query: () => ({ url: 'paintings', method: 'get' }),
    }),
  }),
});

export const { useGetGalleryQuery } = galleryApi;
