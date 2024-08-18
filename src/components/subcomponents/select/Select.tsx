import React, { useEffect, useRef, useState } from 'react';

import { CustomScroll } from 'react-custom-scroll';
import { IProps } from './ISelect';
import styles from './styles.module.scss';

const Select: React.FC<IProps> = (props) => {
  const { name, list, changeSelect } = props;

  const input = useRef(null);

  const [data, setList] = useState(list);
  const [open, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const change = (e: string) => {
    setList(
      list.filter((item) => item.name.toUpperCase().includes(e.toUpperCase()))
    );
    setValue(e);
  };

  const setSelect = (id: number, str: string) => {
    changeSelect(id);
    setList(list);
    setValue(str);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target === input.current) {
        setValue('');
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${open ? styles.active : ''}`}>
      <input
        type="text"
        ref={input}
        className={styles.input}
        onChange={(e) => change(e.target.value)}
        placeholder={`Select the ${name}`}
        value={value}
      />
      <span className={styles.decore} />
      <div className={styles.body}>
        {!data.length && (
          <div className={styles.empty}>
            There are no matching results for your query.
          </div>
        )}
        <CustomScroll>
          <ul className={styles.list}>
            {data.map((item) => (
              <li className={styles.listItem} key={item.id}>
                <button
                  onClick={() => setSelect(item.id, item.name)}
                  className={styles.button}
                  type="button"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </CustomScroll>
      </div>
    </div>
  );
};

export default Select;
