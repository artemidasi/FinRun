import Image from 'next/image';
import { FC } from 'react';
import uuid from 'react-uuid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cn from 'classnames';

import Income from 'components/income';

import AvatarImage from '../../../public/static/images/user-avatar.png';

import { TabArrow } from 'ui-kit/icon';

import styles from './home.module.scss';
import Title from 'ui-kit/title';

const Home: FC = () => {
  const tabs = [
    {
      text: 'Доходы',
      content: <Income />,
    },
    {
      text: 'Расходы',
      content: <section>Расходы (контент)</section>,
    },
    {
      text: 'Инвестиции',
      content: <section>Инвестиции (контент)</section>,
    },
    {
      text: 'Статистика',
      content: <section>Статистика (контент)</section>,
    },
  ];

  return (
    <Tabs className="flex-row full-height">
      <section className={cn('flex-column', styles.left)}>
        <div className={cn('flex-row flex-align_center', styles.userContainer)}>
          <div className={styles.userImage}>
            <Image width={55} height={55} src={AvatarImage} unoptimized />
          </div>

          <div className={cn('flex-column', styles.userInformation)}>
            <span className={styles.userInitials}>Михаил Цветков</span>
            <span className={styles.userEmail}>michailsuper@gmail.com</span>
          </div>
        </div>

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
          const { content } = tab;

          return <TabPanel key={uuid()}>{content}</TabPanel>;
        })}
      </section>
    </Tabs>
  );
};

export default Home;
