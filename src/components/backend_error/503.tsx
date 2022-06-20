import { FC } from 'react';

import styles from './styles.module.scss';

const ServiceUnavailable: FC = () => {
  return <div className={styles.container}>503</div>;
};

export default ServiceUnavailable;
