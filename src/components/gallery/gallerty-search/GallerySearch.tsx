import { useState } from 'react';
import createSearch from '../../../utils/createSearch';
import { useGalleryActionContext } from '../../../context/GalleryContext';

import styles from './styles.module.scss';

const GallerySearch = () => {
  const [search, setSearch] = useState('');
  const { setSearchParam } = useGalleryActionContext();

  const reset = () => {
    setSearch('');
    setSearchParam(createSearch('', 'q'));
  };

  const change = (e: string) => {
    setSearch(e);
    setSearchParam(createSearch(1, '_page'));
    setSearchParam(createSearch(e, 'q'));
  };
  return (
    <div className={styles.wrapper}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.image}
      >
        <path d="M6.39891 3.95319e-08C5.38042 0.000145857 4.37668 0.243368 3.4711 0.709452C2.56552 1.17554 1.78426 1.85102 1.19224 2.67977C0.60022 3.50852 0.214546 4.46659 0.0672671 5.47437C-0.0800113 6.48215 0.0153602 7.51053 0.345456 8.47403C0.675551 9.43754 1.23084 10.3084 1.96516 11.0141C2.69949 11.7198 3.59165 12.2401 4.5675 12.5317C5.54335 12.8233 6.5747 12.8778 7.57584 12.6907C8.57698 12.5035 9.519 12.0801 10.3236 11.4557L14.6323 15.766C14.7825 15.916 14.9861 16.0002 15.1984 16C15.4107 15.9998 15.6142 15.9154 15.7642 15.7652C15.9142 15.6149 15.9984 15.4113 15.9983 15.199C15.9981 14.9867 15.9137 14.7832 15.7634 14.6332L11.4548 10.3245C12.1892 9.3785 12.6435 8.24539 12.7659 7.05402C12.8883 5.86264 12.674 4.66082 12.1473 3.58522C11.6206 2.50961 10.8026 1.60339 9.78641 0.969593C8.77021 0.335798 7.59655 -0.000133053 6.39891 3.95319e-08ZM1.59904 6.39982C1.59904 5.12682 2.10474 3.90595 3.00489 3.0058C3.90504 2.10565 5.1259 1.59996 6.39891 1.59996C7.67191 1.59996 8.89277 2.10565 9.79292 3.0058C10.6931 3.90595 11.1988 5.12682 11.1988 6.39982C11.1988 7.67283 10.6931 8.89369 9.79292 9.79384C8.89277 10.694 7.67191 11.1997 6.39891 11.1997C5.1259 11.1997 3.90504 10.694 3.00489 9.79384C2.10474 8.89369 1.59904 7.67283 1.59904 6.39982Z" />
      </svg>
      <input
        className={styles.input}
        type="text"
        value={search}
        placeholder="Painting title"
        onChange={(e) => change(e.target.value)}
      />

      {search.length > 0 && (
        <button type="button" className={styles.reset} onClick={reset}>
          <svg
            width="8"
            height="8"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.386207 14.8252C0.165517 15.049 0.165517 15.3846 0.386207 15.6084C0.606897 15.8322 0.937931 15.8322 1.15862 15.6084L7.88966 8.8951L14.731 15.8322C14.9517 16.0559 15.2828 16.0559 15.5034 15.8322C15.7241 15.6084 15.7241 15.2727 15.5034 15.049L8.66207 8.11189L15.8345 0.951049C16.0552 0.727273 16.0552 0.391608 15.8345 0.167832C15.6138 -0.0559441 15.2828 -0.0559441 15.0621 0.167832L7.88966 7.32867L0.937931 0.27972C0.717241 0.0559441 0.386207 0.0559441 0.165517 0.27972C-0.0551724 0.503497 -0.0551724 0.839161 0.165517 1.06294L7.22759 8.11189L0.386207 14.8252Z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default GallerySearch;
