import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import store from 'store';

import Layout from 'components/layout';

import 'styles/fonts.scss';
import 'styles/global.scss';
import { useMount } from 'react-use';

interface AppPropsExtends extends AppProps {
  Component: AppProps['Component'] & { Layout?: FC };
}

const App = ({ Component, pageProps }: AppPropsExtends) => {
  useMount(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/16x16.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/120x120.png" />
        <link rel="apple-touch-icon" href="/152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/167x167.png" sizes="167x167" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
