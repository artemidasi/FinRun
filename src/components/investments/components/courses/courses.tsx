import { FC } from 'react';
import cn from 'classnames';

import Title from 'ui-kit/title';

import styles from './courses.module.scss';

const Courses: FC = () => {
  const courses = [
    {
      name: 'Курс Нетологии “Java программист”',
      price: 'до 150 000 ₽ / мес через год обучения',
    },
    {
      name: 'Курс Skillbox “Дизайнер интерфецсов”',
      price: 'до 170 000 ₽ / мес через год обучения',
    },
    {
      name: 'Курс Отус “DexOps инженер”',
      price: 'до 200 000 ₽ / мес через год обучения',
    },
  ];

  return (
    <section>
      <section className={cn('flex-row flex-justify_sb', styles.top)}>
        <div className={styles.information}>
          <Title className={styles.title} variant="h5">
            Курсы повышения квалификации
          </Title>
          <Title variant="h6">
            Лучшая - инвестиция а себя, увеличив свой активный доход, можно
            значительно увеличить накопления, инвестировать их и получать
            пассивный доход.
          </Title>
        </div>

        <div>
          <Title className={styles.price} variant="h5">
            до 200 000 ₽ / мес через год
          </Title>
        </div>
      </section>

      <ul className={styles.list}>
        {courses.map((course) => {
          const { name, price } = course;

          return (
            <li key={name} className={styles.item}>
              <Title className={styles.itemTitle} variant="h6">
                {name}
              </Title>
              <Title isNoBold variant="h5">
                {price}
              </Title>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Courses;
