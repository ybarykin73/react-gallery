import React from 'react';
import style from './style.module.scss';
import { IProps } from './IButton';

const Button: React.FC<IProps> = (props) => {
  const { ariaLabel, children, onClick, idDisabled } = props;
  return (
    <button
      className={style.button}
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
      disabled={idDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
