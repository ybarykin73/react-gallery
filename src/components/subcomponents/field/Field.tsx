import React, { useState } from 'react';
import { IProps } from './IField';
import styles from './styles.module.scss';

const Field: React.FC<IProps> = (props) => {
  const { type, placeholder, handleCahge } = props;
  const [value, setValue] = useState('');

  const handleValue = (e: string) => {
    handleCahge(e);
    setValue(e);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleValue(e.target.value)}
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Field;
