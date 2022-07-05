import { FC } from 'react';
import uuid from 'react-uuid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cn from 'classnames';

import Title from 'ui-kit/title';

import { priceFormatter } from 'utils/priceFormatter';

import Courses from './components/courses/courses';

import styles from './investments.module.scss';

const Investments: FC = () => {
  const items = [
    {
      text: 'В текущем месяце Вы сэкономили',
      summa: 37_600,
      status: 'good',
    },
    {
      text: 'Потенциальная доходность при 20% годовых',
      summa: 93_600,
      status: 'good',
    },
    {
      text: 'Иррациональные расходы',
      summa: 1_200,
      status: 'bad',
    },
    {
      text: 'За год можно сэкономить и заработать',
      summa: 18_720,
      status: 'bad',
    },
  ];

  const tabs = [
    {
      text: 'Курсы',
      content: <Courses />,
    },
    {
      text: 'Вклады',
      content: <span>В разработке</span>,
    },
  ];

  return (
    <section>
      <ul className={styles.list}>
        {items.map((item) => {
          const { status, summa, text } = item;

          return (
            <li
              key={uuid()}
              className={cn('flex-row', styles.item, styles[`item_${status}`])}>
              <div className={cn(styles.point, styles[`point_${status}`])} />
              <div>
                <Title className={styles.text} variant="h6">
                  {text}
                </Title>
                <Title variant="h5">{priceFormatter(summa)}</Title>
              </div>
            </li>
          );
        })}
      </ul>

      <Tabs>
        <TabList className={cn('flex-row flex-align_center', styles.tab_list)}>
          {tabs.map((tab) => {
            const { text } = tab;

            return (
              <Tab
                className={cn(
                  'flex-row flex-align_center flex-justify_sb pointer',
                  styles.tab_item,
                )}
                selectedClassName={styles.tab_item__selected}
                key={uuid()}>
                <Title variant="h2">{text}</Title>
              </Tab>
            );
          })}
        </TabList>

        {tabs.map((tab) => {
          const { content } = tab;

          return <TabPanel key={uuid()}>{content}</TabPanel>;
        })}
      </Tabs>
    </section>
  );
};

export default Investments;
