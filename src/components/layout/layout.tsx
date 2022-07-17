import { unresctrictedPages } from 'constants/links';
import { useCustomRouter } from 'hooks/useCustomRouter.hook';
import { FC } from 'react';

import cn from 'classnames';

import Logo from 'components/logo';

import styles from './layout.module.scss';

const Layout: FC = ({ children }) => {
  const router = useCustomRouter();

  const isAuthPage = unresctrictedPages.includes(router.pathname);

  const authClasses = cn('flex-center full-width', styles.authWrapper);

  return (
    <div className={styles.wrapper}>
      <main
        className={cn('full-height', {
          [styles.main]: !isAuthPage,
          [authClasses]: isAuthPage,
        })}>
        {isAuthPage ? (
          <div className={cn('full-height', styles.authContainer)}>
            <Logo className={styles.logo} />
            {children}
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default Layout;
