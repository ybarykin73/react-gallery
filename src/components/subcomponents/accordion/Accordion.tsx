import React, { useRef, useState } from 'react';

import styles from './style.module.scss';
import { IProps } from './IAccordion';

const Accordion: React.FC<IProps> = (props) => {
  const { name, children } = props;

  const wrapper = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      ref={wrapper}
      className={`${styles.wrapper} ${isOpen ? styles.active : 'active'}`}
    >
      <button
        type="button"
        aria-label="Open"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.title}>{name}</div>
        <span className={styles.decore} />
      </button>
      <div className={styles.body}>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
