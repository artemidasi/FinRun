import { FC } from 'react';

import Title from 'ui-kit/title';

import { AlertStatus, useCustomRouter } from 'hooks/useCustomRouter.hook';
import { getContent } from './const';

import Button from 'ui-kit/button';

import styles from './alert.module.scss';

export const Alert: FC = () => {
  const router = useCustomRouter();

  const {
    email = '',
    alert_status = AlertStatus.pending,
    section_name,
  } = router.query;

  const handleGoBack = () => {
    router.back();

    return null;
  };

  if (alert_status === AlertStatus.pending) {
    return handleGoBack();
  }

  if (!section_name) {
    return handleGoBack();
  }

  const section = getContent(email)[section_name];

  if (!section) {
    return handleGoBack();
  }

  const information = section[alert_status];

  if (!information) {
    return handleGoBack();
  }

  const { text, title } = information;

  return (
    <section className={styles.container}>
      <Title className={styles.title} variant="h1">
        {title}
      </Title>

      <Title className={styles.text} variant="h4">
        {text}
      </Title>

      <Button className={styles.button} onClick={handleGoBack}>
        Вернуться назад
      </Button>
    </section>
  );
};

export default Alert;
