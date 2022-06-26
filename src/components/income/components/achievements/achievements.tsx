import { motion, AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';
import uuid from 'react-uuid';
import Image from 'next/image';
import cn from 'classnames';

import AchievementIcon from 'public/static/images/achievement .svg';

import Title from 'ui-kit/title';

import Progress from 'ui-kit/progressbar';

import { VarianAchievement } from './type';

import { variants } from './variants';

import styles from './achievements.module.scss';

const TEST__achievements = [
  {
    id: uuid(),
    text: 'Увеличить долю пассивных доходов',
    percent: 55,
    isOpen: false,
  },
  {
    id: uuid(),
    text: 'Уasdadsasdadsxcc',
    percent: 20,
    isOpen: false,
  },
  {
    id: uuid(),
    text: 'Уasdadsasdadsxcc',
    percent: 20,
    isOpen: false,
  },
  {
    id: uuid(),
    text: 'Уasdadsasdadsxcc',
    percent: 20,
    isOpen: false,
  },
  {
    id: uuid(),
    text: 'Увеличить долю пассивных доходов',
    percent: 55,
    isOpen: false,
  },
  {
    id: uuid(),
    text: 'Уasdadsasdadsxcc',
    percent: 20,
    isOpen: false,
  },
  {
    id: uuid(),
    text: 'Уasdadsasdadsxcc',
    percent: 20,
    isOpen: false,
  },
  {
    id: uuid(),
    text: 'Уasdadsasdadsxcc',
    percent: 20,
    isOpen: false,
  },
];

const Achievements: FC = () => {
  const [achievements, setAchievements] = useState({
    list: TEST__achievements,
    openId: '',
    lastId: '',
  });

  const handleChangeAchievement = (id: string) => () => {
    setAchievements((prevState) => {
      let openId = '';
      let lastId = '';

      return {
        list: prevState.list.map((achievement) => {
          const isCheck = achievement.id === id;
          if (isCheck) {
            openId = achievement.isOpen ? '' : achievement.id;
            lastId = achievement.isOpen ? achievement.id : '';
          }

          return {
            ...achievement,
            isOpen: achievement.id === id ? !achievement.isOpen : false,
          };
        }),
        openId,
        lastId,
      };
    });
  };

  const { list, openId, lastId } = achievements;

  return (
    <section className={styles.container}>
      <Title className={styles.title} variant="h2">
        Достижения
      </Title>
      <AnimatePresence>
        <ul className={styles.list}>
          {list.map((achievement) => {
            const { id, text, percent, isOpen } = achievement;

            if (openId && openId !== id) return null;

            return (
              <li
                key={id}
                className={cn('flex-row flex-align_center', styles.item, {
                  [styles.item_full]: isOpen,
                  [styles.item_last]: lastId === id,
                })}>
                <button
                  className={styles.itemButton}
                  onClick={handleChangeAchievement(id)}>
                  <Image
                    src={AchievementIcon}
                    alt="AchievementIcon"
                    width={106}
                    height={106}
                  />
                </button>
                {isOpen && (
                  <motion.div
                    className={cn('full-width flex-column', styles.itemRight)}
                    variants={variants}
                    initial={VarianAchievement.closed}
                    animate={VarianAchievement.open}
                    exit={VarianAchievement.closed}>
                    <div
                      className={cn(
                        'flex-row flex-align_center flex-justify_sb',
                        styles.itemInformation,
                      )}>
                      <span className={styles.itemText}>{text}</span>
                      <span>{percent}%</span>
                    </div>
                    <Progress percent={percent} />
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
