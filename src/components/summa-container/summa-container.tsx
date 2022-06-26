import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import MoneyIcon from 'public/static/images/money.svg';

import { priceFormatter } from 'utils/priceFormatter';

import styles from './summa-container.module.scss';

import { SummaContainerProps } from './type';
import Title from 'ui-kit/title';

const SummaContainer: FC<SummaContainerProps> = (props) => {
  const { summa } = props;

  return (
    <div className={cn('flex-row flex-align_center', styles.container)}>
      <Image
        src={MoneyIcon}
        alt="money_icon"
        width={22}
        height={19}
        unoptimized
      />

      <Title className={styles.text} variant="h5">
        {priceFormatter(summa)}
      </Title>
    </div>
  );
};

export default SummaContainer;
