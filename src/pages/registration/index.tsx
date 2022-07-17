import { NextPage } from 'next';
import Head from 'next/head';

import Registration from 'components/registration';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>

      <Registration />
    </>
  );
};

export default HomePage;
