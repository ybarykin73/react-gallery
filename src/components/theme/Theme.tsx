import ligth from '../../../public/theme-light.svg';
import dark from '../../../public/theme-dark.svg';

import useTheme from '../../hooks/useTheme';
import styles from './styles.module.scss';

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setTheme((prev) => (prev === 'dark' ? 'ligth' : 'dark'))}
        type="button"
        aria-label="Set theme"
      >
        {theme === 'dark' ? (
          <img src={ligth} alt="Enable dark theme" />
        ) : (
          <img src={dark} alt="Enable light theme" />
        )}
      </button>
    </div>
  );
};

export default Theme;
