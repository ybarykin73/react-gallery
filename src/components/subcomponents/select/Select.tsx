import React, { useState } from 'react';
import { IProps } from './ISelect';
import styles from './styles.module.scss';

const Select: React.FC<IProps> = (props) => {
  const { list } = props;

  const [data, setList] = useState(list);

  const change = (e: string) => {
    setList(
      list.filter((item) => item.name.toUpperCase().includes(e.toUpperCase()))
    );
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => change(e.target.value)}
        placeholder="Select the artist"
      />
      <span className={styles.decore} />

      <div className={styles.body}>
        <ul className={styles.list}>
          {data.map((item) => (
            <li className={styles.listItem} key={item.id}>
              <button className={styles.button} type="button">
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
