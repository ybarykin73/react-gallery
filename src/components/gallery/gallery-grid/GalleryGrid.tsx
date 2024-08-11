import { useGetGalleryQuery } from '../../../store/slice/gallery';

import GalleryCard from '../gallery-card/GalleryCard';
import styles from './style.module.scss';

const GalleryGrid = () => {
  const { data, error, isLoading } = useGetGalleryQuery('');

  if (isLoading) {
    return 'loading';
  }
  if (error) {
    return 'error!!!!';
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data?.slice(0, 6).map((item) => (
          <li key={item.id}>
            <GalleryCard
              created={item.created}
              imageUrl={item.imageUrl}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryGrid;
