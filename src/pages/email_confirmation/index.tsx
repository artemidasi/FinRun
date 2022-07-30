import { NextPage } from 'next';
import Head from 'next/head';

import EmailConfirmation from 'components/email_confirmation';

const EmailConfirmationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Подтверждение почты</title>
      </Head>

      <EmailConfirmation />
    </>
  );
};

export default EmailConfirmationPage;
