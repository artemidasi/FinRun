import { FC, useContext, useMemo } from 'react';
import Image from 'next/image';

import Button from 'ui-kit/button';
import Calendar from 'components/calendar';

import { windowContext } from 'providers/window.provider';

import PlusIcon from 'public/static/images/plus.svg';

import SummaContainer from 'components/summa-container';

import FinanceList from './components/finance-list';

import { FinanceContainerProps } from './type';
import { WindowType } from 'types/window';

const FinanceContainer: FC<FinanceContainerProps> = (props) => {
  const { buttonInformation, items } = props;

  const windowType = useContext(windowContext);

  const { text, onClick } = buttonInformation;

  const totalSumma = useMemo(() => {
    return items.reduce((accumulator, { price }) => {
      return accumulator + price;
    }, 0);
  }, [items]);

  const content = {
    [WindowType.desktop]: (
      <>
        <Calendar />

        <FinanceList items={items} />

        <div className="flex-row flex-align_center flex-justify_sb">
          <Button
            iconLeft={
              <Image src={PlusIcon} alt="plus_icon" width={14} height={14} />
            }
            onClick={onClick}>
            {text}
          </Button>

          <SummaContainer summa={totalSumma} />
        </div>
      </>
    ),
    [WindowType.tablet]: (
      <>
        <div className="flex-row flex-align_center flex-justify_sb">
          <Calendar />
          <SummaContainer summa={totalSumma} />
        </div>

        <FinanceList items={items} />

        <Button
          iconLeft={
            <Image src={PlusIcon} alt="plus_icon" width={14} height={14} />
          }
          onClick={onClick}>
          {text}
        </Button>
      </>
    ),
    [WindowType.mobile]: (
      <>
        <div className="flex-row flex-align_center flex-justify_sb">
          <Calendar />
          <SummaContainer summa={totalSumma} />
        </div>

        <FinanceList items={items} />

        <Button
          className="full-width flex-justify_center"
          iconLeft={
            <Image src={PlusIcon} alt="plus_icon" width={14} height={14} />
          }
          onClick={onClick}>
          {text}
        </Button>
      </>
    ),
  };

  return <section>{content[windowType]}</section>;
};

export default FinanceContainer;
