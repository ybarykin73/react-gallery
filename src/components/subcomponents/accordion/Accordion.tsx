import React from 'react';

import styles from './style.module.scss';
import { IProps } from './IAccordion';

const Accordion: React.FC<IProps> = (props) => {
  const { name, children } = props;
  return (
    <label className={styles.label}>
      <div className={styles.title}>{name}</div>
      <input className={styles.input} type="checkbox" />
      <div className={styles.body}>{children}</div>
      <span className={styles.decore} />
    </label>
  );
};

export default Accordion;
