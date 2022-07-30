import { FC, useEffect, useState } from 'react';
import Title from 'ui-kit/title';
import { AlertStatus, useCustomRouter } from 'hooks/useCustomRouter.hook';
import { Nullable } from 'types';
import Preloader from 'components/preloader';

const EmailConfirmation: FC = () => {
  const router = useCustomRouter();

  const { email = '', alert_status = null, token = '' } = router.query;

  const [status] = useState<Nullable<AlertStatus>>(alert_status);

  useEffect(() => {
    if (token) {
    }
  }, [token]);

  if (!status) return <Preloader />;

  return (
    <section>
      <Title variant="h2">Письмо отправлено</Title>
      <Title variant="h4">
        Мы отправили письмо на вашу элеетронную почту: {email}. Для завершения
        регистрации, пройдите по ссылке, которая приложена к письму
      </Title>
    </section>
  );
};

export default EmailConfirmation;
