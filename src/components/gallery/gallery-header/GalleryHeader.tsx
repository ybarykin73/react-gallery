import Filter from '../../filter/Filter';
import GallerySearch from '../gallerty-search/GallerySearch';

import styles from './styles.module.scss';

const GalleryHeader = () => {
  return (
    <div className={styles.wrapper}>
      <GallerySearch />
      <Filter />
    </div>
  );
};

export default GalleryHeader;
