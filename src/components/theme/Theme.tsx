import { useState, useLayoutEffect } from 'react';
import ligth from '../../../public/theme-light.svg';
import dark from '../../../public/theme-dark.svg';

import styles from './styles.module.scss';
const Theme = () => {
  const [theme, setTheme] = useState('dark');

  useLayoutEffect(() => {
    document.body.setAttribute(
      'data-theme',
      theme == 'dark' ? 'light' : 'dark'
    );
  }, [theme]);
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setTheme((prev) => (prev == 'dark' ? 'ligth' : 'dark'))}
      >
        {theme === 'dark' ? (
          <img src={dark} alt="Enable light theme" />
        ) : (
          <img src={ligth} alt="Enable dark theme" />
        )}
      </button>
    </div>
  );
};

export default Theme;
