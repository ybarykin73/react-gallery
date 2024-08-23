import { createApi } from '@reduxjs/toolkit/query/react';

import axiosBaseQuery from '../interceptor';
import { IPaintings } from '../../types/IPaintings';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://test-front.framework.team/',
  }),
  endpoints: (builder) => ({
    getGallery: builder.query<IPaintings[], string>({
      query: (str: string) => ({
        url: `paintings${str}`,
        params: {
          _limit: 6,
        },
        method: 'get',
      }),
    }),
    getQueryByName: builder.query<[], string>({
      query: (str: string) => ({
        url: str,
        method: 'get',
      }),
    }),

    getPagination: builder.query<IPaintings[], string>({
      query: (str: string) => ({
        url: `paintings${str.replace(/\_page=.{1}/g, '')}`,
        method: 'get',
      }),
    }),
  }),
});

export const {
  useGetGalleryQuery,
  useGetQueryByNameQuery,
  useGetPaginationQuery,
} = galleryApi;
