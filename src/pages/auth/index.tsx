import { NextPage } from 'next';

import Head from 'next/head';
import Auth from 'components/auth';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Авторизация</title>
      </Head>

      <Auth />
    </>
  );
};

export default HomePage;
