import styles from './styles.module.scss';

const GalleryGridPreloader = () => {
  return (
    <div className={styles.placeholder}>
      {new Array(6).fill(null).map((_, index) => (
        // TODO не хотелось выносить игнорирование в отдельную настройку
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={styles.item} />
      ))}
    </div>
  );
};

export default GalleryGridPreloader;
