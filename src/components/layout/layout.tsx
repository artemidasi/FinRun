import { FC } from 'react';

import Header from 'components/header';
import Footer from 'components/footer';

import styles from './layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.innerWrapper}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
