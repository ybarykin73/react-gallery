import React, {
  useMemo,
  useState,
  ReactNode,
  useContext,
  createContext,
} from 'react';
import {
  useGetGalleryQuery,
  useGetQueryByNameQuery,
} from '../store/slice/gallery';

import createGalleryCard from '../utils/createGalleryCard';
import { IGallery } from '../types/IGallery';

export interface IContext {
  data: IGallery[];
  isLoading: boolean;
  error: unknown;
}

export interface IActionContext {
  setSate: () => string;
}

interface IProps {
  children: ReactNode;
}

const GalleryContext = createContext<IContext>({
  data: [],
  isLoading: true,
  error: false,
});

const GalleryActionContext = createContext<any>({ setSate: () => {} });

const GalleryProvider: React.FC<IProps> = (props) => {
  const { children } = props;
  const [searchParam, setSearchParam] = useState('');
  const {
    data: gallery = [],
    isLoading,
    error,
  } = useGetGalleryQuery(searchParam);
  const { data: author = [] } = useGetQueryByNameQuery('authors');
  const { data: location = [] } = useGetQueryByNameQuery('locations');

  const data = createGalleryCard(gallery, author, location);

  const value = useMemo(
    () => ({ data, isLoading, error }),
    [data, isLoading, error]
  );

  const actionValue = useMemo(() => ({ setSearchParam }), [setSearchParam]);

  return (
    <GalleryContext.Provider value={value}>
      <GalleryActionContext.Provider value={actionValue}>
        {children}
      </GalleryActionContext.Provider>
    </GalleryContext.Provider>
  );
};

export function useGalleryContext() {
  return useContext(GalleryContext);
}

export function useGalleryActionContext() {
  return useContext(GalleryActionContext);
}

export default GalleryProvider;
