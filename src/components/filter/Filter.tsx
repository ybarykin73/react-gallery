import { useEffect, useRef, useState } from 'react';
import Select from '../subcomponents/select/Select';
import Button from '../subcomponents/button/Button';
import Field from '../subcomponents/field/Field';
import Accordion from '../subcomponents/accordion/Accordion';
import { useGalleryActionContext } from '../../context/GalleryContext';

import createSearch from '../../utils/createSearch';
import deleteSearch from '../../utils/deleteSearch';

import { useGetQueryByNameQuery } from '../../store/slice/gallery';

import styles from './styles.module.scss';

const Filter = () => {
  const { data: authorsData = [] } = useGetQueryByNameQuery('authors');
  const { data: locationData = [] } = useGetQueryByNameQuery('locations');
  const { setSearchParam } = useGalleryActionContext();

  const wrapper = useRef<HTMLDivElement>(null);
  const button = useRef(null);

  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState(0);

  const setAuthor = (id: number) => {
    const params = createSearch(id, 'authorId');
    setFilter(params);
  };

  const setYearFrom = (e: string) => {
    const params = createSearch(e, 'created_gte');
    setFilter(params);
  };

  const setYearTo = (e: string) => {
    const params = createSearch(e, 'created_lte');
    setFilter(params);
  };

  const applyFilter = () => {
    setSearchParam(filter);
  };

  const clear = () => {
    deleteSearch();
    setFilter('');
    setReset((prev) => prev + 1);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        wrapper.current &&
        !wrapper.current.contains(e.target as HTMLDivElement) &&
        e.target !== button.current
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open"
        ref={button}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.2 3.5C15.3 3.5 14.7 4 14.5 4.7H2.6C2.2 4.7 2 4.9 2 5.3C2 5.7 2.2 5.9 2.6 5.9H14.4C14.6 6.6 15.4 7.1 16.1 7.1C17.1 7.1 17.9 6.3 17.9 5.3C18 4.3 17.1 3.5 16.2 3.5ZM16.2 5.9C15.8 5.9 15.6 5.7 15.6 5.3C15.6 4.9 15.8 4.7 16.2 4.7C16.6 4.7 16.8 4.9 16.8 5.3C16.8 5.7 16.5 5.9 16.2 5.9Z" />
          <path d="M16.2 9.40001H9.3C9 8.70001 8.4 8.20001 7.5 8.20001C6.6 8.20001 6 8.70001 5.8 9.40001H2.6C2.2 9.40001 2 9.60001 2 10C2 10.4 2.2 10.6 2.6 10.6H5.8C6 11.3 6.8 11.8 7.5 11.8C8.2 11.8 9 11.3 9.3 10.6H16.2C16.6 10.6 16.8 10.4 16.8 10C16.8 9.60001 16.5 9.40001 16.2 9.40001ZM7.5 10.6C7.2 10.6 6.9 10.4 6.9 10C6.9 9.60001 7.1 9.40001 7.5 9.40001C7.9 9.40001 8.1 9.60001 8.1 10C8.1 10.4 7.9 10.6 7.5 10.6Z" />
          <path d="M16.2 14.1H14.2C14 13.4 13.3 12.9 12.5 12.9C11.6 12.9 11 13.4 10.8 14.1H2.6C2.2 14.1 2 14.3 2 14.7C2 15.1 2.2 15.3 2.6 15.3H10.7C10.9 16 11.7 16.5 12.4 16.5C13.1 16.5 13.9 16 14.1 15.3H16.1C16.5 15.3 16.7 15.1 16.7 14.7C16.8 14.4 16.5 14.1 16.2 14.1ZM12.5 15.3C12.1 15.3 11.9 15.1 11.9 14.7C11.9 14.3 12.1 14.1 12.5 14.1C12.9 14.1 13.1 14.3 13.1 14.7C13.1 15.1 12.8 15.3 12.5 15.3Z" />
        </svg>
      </button>
      <div
        className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}
        ref={wrapper}
      >
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          aria-label="Close"
          className={styles.close}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.386207 14.8252C0.165517 15.049 0.165517 15.3846 0.386207 15.6084C0.606897 15.8322 0.937931 15.8322 1.15862 15.6084L7.88966 8.8951L14.731 15.8322C14.9517 16.0559 15.2828 16.0559 15.5034 15.8322C15.7241 15.6084 15.7241 15.2727 15.5034 15.049L8.66207 8.11189L15.8345 0.951049C16.0552 0.727273 16.0552 0.391608 15.8345 0.167832C15.6138 -0.0559441 15.2828 -0.0559441 15.0621 0.167832L7.88966 7.32867L0.937931 0.27972C0.717241 0.0559441 0.386207 0.0559441 0.165517 0.27972C-0.0551724 0.503497 -0.0551724 0.839161 0.165517 1.06294L7.22759 8.11189L0.386207 14.8252Z"
              fill="#DEDEDE"
            />
          </svg>
        </button>
        <div className={styles.body}>
          <div className={styles.main}>
            {authorsData.length > 0 && (
              <Accordion name="Artist">
                <Select
                  name="artist"
                  list={authorsData}
                  changeSelect={setAuthor}
                  key={`artist${reset}`}
                />
              </Accordion>
            )}

            {locationData.length > 0 && (
              <Accordion name="Location">
                <Select
                  name="artist"
                  list={authorsData}
                  changeSelect={setAuthor}
                  key={`location${reset}`}
                />
              </Accordion>
            )}

            <Accordion name="Years">
              <div className={styles.years}>
                <Field
                  key={`yearsFrom${reset}`}
                  type="number"
                  placeholder="From"
                  handleCahge={setYearFrom}
                />
                <svg
                  width="16"
                  height="2"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.7 1.69999H15.4C15.6 1.69999 15.7 1.59999 15.9 1.49999C15.9 1.29999 16 1.19999 16 0.999988C16 0.799988 15.9 0.699988 15.8 0.499988C15.7 0.399988 15.5 0.299988 15.3 0.299988H8.7H7.3H0.7C0.5 0.299988 0.4 0.399988 0.2 0.499988C0.1 0.699988 0 0.799988 0 0.999988C0 1.19999 0.1 1.29999 0.2 1.49999C0.3 1.59999 0.5 1.69999 0.7 1.69999H7.4H8.7Z"
                  />
                </svg>
                <Field
                  key={`yearsTo${reset}`}
                  type="number"
                  placeholder="To"
                  handleCahge={setYearTo}
                />
              </div>
            </Accordion>
          </div>
          <div className={styles.footer}>
            <Button ariaLabel="Show the results" onClick={applyFilter}>
              Show the results
            </Button>
            <Button
              idDisabled={filter.length === 0}
              ariaLabel="clear"
              onClick={clear}
            >
              clear
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
