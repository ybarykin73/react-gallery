import styles from './styles.module.scss';

import Button from '../subcomponents/button/Button';

const Error = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Loading error!</h1>
      <p>Try reloading the page</p>
      <Button ariaLabel="Reloading" onClick={() => window.location.reload()}>
        Button text
      </Button>
    </div>
  );
};

export default Error;
