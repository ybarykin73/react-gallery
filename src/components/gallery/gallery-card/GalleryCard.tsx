import React from 'react';
import noImage from '../../../../public/no-iamge.jpg';
import styles from './styles.module.scss';
import { IGallery } from '../../../types/IGallery';

const GalleryCard: React.FC<IGallery> = (props) => {
  const { created, imageUrl = noImage, name, author, location } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img
          width={392}
          height={260}
          className={styles.img}
          src={`https://test-front.framework.team${imageUrl}`}
          alt={name}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.subtitle}>{created}</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.title}>{author}</h2>
          <p className={styles.subtitle}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
