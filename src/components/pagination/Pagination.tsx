import PaginationView from './PaginationView';
import { useGalleryContext } from '../../context/GalleryContext';

const Pagination = () => {
  const { pagination } = useGalleryContext();
  const length = Math.ceil(pagination / 6);

  return <PaginationView length={length} />;
};

export default Pagination;
