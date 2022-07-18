import { FC } from 'react';
import uuid from 'react-uuid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cn from 'classnames';

import Income from 'components/income';
import UserInformation from 'components/user-information';
import Expenses from 'components/expenses';
import Investments from 'components/investments';
import Statistics from 'components/statistics';
import Logo from 'components/logo';

import { TabArrow } from 'ui-kit/icon';
import Title from 'ui-kit/title';
import DateInterval from 'ui-kit/date-interval';

import styles from './home.module.scss';

const Home: FC = () => {
  const tabs = [
    {
      text: 'Доходы',
      content: <Income />,
    },
    {
      text: 'Расходы',
      content: <Expenses />,
    },
    {
      text: 'Инвестиции',
      content: <Investments />,
    },
    {
      text: 'Статистика',
      isYearInterval: true,
      content: <Statistics />,
    },
  ];

  return (
    <Tabs className="flex-row full-height">
      <section className={cn('flex-column full-width', styles.navigate)}>
        <UserInformation />

        <TabList className={styles.list}>
          {tabs.map((tab) => {
            const { text } = tab;

            return (
              <Tab
                className={cn(
                  'flex-row flex-align_center flex-justify_sb pointer',
                  styles.item,
                )}
                selectedClassName={styles.item_selected}
                key={uuid()}>
                <Title variant="h3">{text}</Title>

                <TabArrow />
              </Tab>
            );
          })}
        </TabList>

        <Logo className={styles.title} />
      </section>

      <section className={cn('full-width', styles.right)}>
        {tabs.map((tab) => {
          const { content, text, isYearInterval } = tab;

          return (
            <TabPanel key={uuid()}>
              <div className={styles.tabTop}>
                <Title className={styles.tabTitle} variant="h2">
                  {text}
                </Title>

                {isYearInterval && <DateInterval isOnlyYear />}
              </div>

              {content}
            </TabPanel>
          );
        })}
      </section>
    </Tabs>
  );
};

export default Home;
