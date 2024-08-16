import GalleryGrid from './gallery-grid/GalleryGrid';
import GalleryHeader from './gallery-header/GalleryHeader';
import GalleryProvider from '../../context/GalleryContext';

const Gallery = () => {
  return (
    <GalleryProvider>
      <div className="container">
        <GalleryHeader />
        <GalleryGrid />
      </div>
    </GalleryProvider>
  );
};

export default Gallery;
