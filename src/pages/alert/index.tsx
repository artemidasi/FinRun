import { NextPage } from 'next';
import Head from 'next/head';

import Alert from 'components/alert';

const RegistrationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Статус ответа</title>
      </Head>

      <Alert />
    </>
  );
};

export default RegistrationPage;
