import { FC } from 'react';
import uuid from 'react-uuid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cn from 'classnames';

import Income from 'components/income';
import UserInformation from 'components/user-information';
import Expenses from 'components/expenses';
import Investments from 'components/investments';

import { TabArrow } from 'ui-kit/icon';
import Title from 'ui-kit/title';

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
      content: <section>Статистика (контент)</section>,
    },
  ];

  return (
    <Tabs className="flex-row full-height">
      <section className={cn('flex-column', styles.left)}>
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

        <span className={styles.title}>FinRun</span>
      </section>

      <section className={cn('full-width', styles.right)}>
        {tabs.map((tab) => {
          const { content, text } = tab;

          return (
            <TabPanel key={uuid()}>
              <Title className={styles.tab_title} variant="h2">
                {text}
              </Title>

              {content}
            </TabPanel>
          );
        })}
      </section>
    </Tabs>
  );
};

export default Home;
