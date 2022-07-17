import { FC } from 'react';

import Title from 'ui-kit/title';

import { StepsProps } from './type';

import styles from './steps.module.scss';

const Steps: FC<StepsProps> = (props) => {
  const { maximum_step, current_step } = props;

  return (
    <Title isNoBold variant="h5" className={styles.steps}>
      Шаг {current_step}/{maximum_step}
    </Title>
  );
};

export default Steps;
