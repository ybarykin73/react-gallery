import GallerySearch from '../gallerty-search/GallerySearch';
import styles from './styles.module.scss';

const GalleryHeader = () => {
  return (
    <div className={styles.wrapper}>
      <GallerySearch />
    </div>
  );
};

export default GalleryHeader;
