import Error from '../../error/Error';
import GalleryGridPreloader from './GalleryGridPreloader';
import GalleryCard from '../gallery-card/GalleryCard';
import styles from './style.module.scss';
import { useGalleryContext } from '../../../context/GalleryContext';

const GalleryGrid = () => {
  const { data = [], isLoading, error } = useGalleryContext();

  if (isLoading) {
    return <GalleryGridPreloader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id}>
            <GalleryCard
              created={item.created}
              imageUrl={item.imageUrl}
              name={item.name}
              author={item.author}
              location={item.location}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryGrid;
