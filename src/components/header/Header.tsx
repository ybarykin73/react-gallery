import Logo from '../logo/Logo';
import Theme from '../theme/Theme';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Theme />
        </div>
      </div>
    </header>
  );
};

export default Header;
