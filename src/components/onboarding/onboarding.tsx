import { FC } from 'react';

import Title from 'ui-kit/title';
import Button from 'ui-kit/button';
import { ButtonVariant } from 'ui-kit/button/type';

import { Links } from 'types/links';

import Steps from 'components/steps';

import { useCustomRouter } from 'hooks/useCustomRouter.hook';

import styles from './onboarding.module.scss';

const Onboarding: FC = () => {
  const router = useCustomRouter();

  const handleGo = (link: Links) => () => {
    router.push(link);
  };

  return (
    <>
      <div className={styles.information}>
        <Steps maximum_step={3} current_step={1} />

        <Title variant="h2" className={styles.title}>
          Привет!
          <br /> Добро пожаловать в FinRun.
        </Title>

        <Title variant="h4" className={styles.description}>
          FinRun — журнал доход и расходов с алгоритмом выявления иррациональных
          трат для дальнейшего инвестирования. Чтобы начать пользоваться
          сервисом, необходимо зарегистрироваться. Начнём?
        </Title>

        <Button onClick={handleGo(Links.registration)}>
          Начать регистрацию
        </Button>
      </div>

      <Button
        variant={ButtonVariant.text}
        className={styles.buttonAuth}
        onClick={handleGo(Links.auth)}>
        Уже регестрировались?
      </Button>
    </>
  );
};

export default Onboarding;
