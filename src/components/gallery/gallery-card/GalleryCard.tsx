import React from 'react';
import noImage from '../../../../public/no-iamge.jpg';
import styles from './styles.module.scss';
import { IGallery } from '../../../types/IGallery';

const GalleryCard: React.FC<IGallery> = (props) => {
  const { created, imageUrl = noImage, name } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img
          width={392}
          height={260}
          className={styles.img}
          src={`https://test-front.framework.team${imageUrl}`}
          alt=""
        />
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.years}>{created}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
