import React, { useState } from 'react';
import createSearch from '../../utils/createSearch';
import { useGalleryActionContext } from '../../context/GalleryContext';

import { IProps } from './IPagination';
import styles from './styles.module.scss';

const PaginationView: React.FC<IProps> = (props) => {
  const { length } = props;

  const [page, setPage] = useState(1);
  const { setSearchParam } = useGalleryActionContext();

  const nextPage = () => {
    setPage((prev) => prev + 1);
    setSearchParam(createSearch(page + 1, '_page'));
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
    setSearchParam(createSearch(page - 1, '_page'));
  };

  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <button type="button" onClick={prevPage} disabled={page === 1}>
            prev
          </button>
        </li>
        <li>{page}</li>
        <li>
          <button type="button" onClick={nextPage} disabled={page === length}>
            next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PaginationView;
