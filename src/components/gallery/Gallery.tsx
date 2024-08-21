import Pagination from '../pagination/Pagination';
import GalleryGrid from './gallery-grid/GalleryGrid';
import GalleryHeader from './gallery-header/GalleryHeader';
import GalleryProvider from '../../context/GalleryContext';

const Gallery = () => {
  return (
    <GalleryProvider>
      <div className="container">
        <GalleryHeader />
        <GalleryGrid />
        <Pagination />
      </div>
    </GalleryProvider>
  );
};

export default Gallery;
