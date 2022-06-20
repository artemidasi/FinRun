import { FC } from 'react';

import styles from './layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
