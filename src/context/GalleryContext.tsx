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
interface IProps {
  children: ReactNode;
}

const GalleryContext = createContext<IContext>({
  data: [],
  isLoading: true,
  error: false,
});

const GalleryProvider: React.FC<IProps> = (props) => {
  const { children } = props;
  const [state, setSate] = useState('');
  const { data: gallery = [], isLoading, error } = useGetGalleryQuery(state);
  const { data: author = [] } = useGetQueryByNameQuery('authors');
  const { data: location = [] } = useGetQueryByNameQuery('locations');

  const data = createGalleryCard(gallery, author, location);

  const value = useMemo(
    () => ({ data, isLoading, error, setSate }),
    [data, isLoading, error]
  );
  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

export function useGalleryContext() {
  return useContext(GalleryContext);
}

export default GalleryProvider;
