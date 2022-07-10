import { NextPage } from 'next';

import Home from 'components/home';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Личный кабинет</title>
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
