import React from 'react';
import styles from './styles.module.scss';
import { ICardProps } from '../../../types/ICard';

const GalleryCard: React.FC<ICardProps> = (props) => {
  const { created, imageUrl, name } = props;

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
