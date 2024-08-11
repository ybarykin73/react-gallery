import style from './style.module.scss';

import Button from '../subcomponents/button/Button';

const Error = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Loading error!</h1>
      <p>Try reloading the page</p>
      <Button ariaLabel="Reloading" onClick={() => window.location.reload()}>
        Button text
      </Button>
    </div>
  );
};

export default Error;
