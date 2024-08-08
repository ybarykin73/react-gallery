import Logo from '../logo/Logo';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
