import { FC } from 'react';
import Image from 'next/image';

import cn from 'classnames';

import AvatarImage from 'public/static/images/user-avatar.png';

import Title from 'ui-kit/title';

import styles from './user-information.module.scss';

const UserInformation: FC = () => {
  return (
    <section className={cn('flex-row flex-align_center', styles.container)}>
      <Image width={55} height={55} src={AvatarImage} unoptimized />

      <div className={cn('flex-column', styles.information)}>
        <Title className={styles.initials} variant="h3">
          Михаил Цветков
        </Title>

        <Title variant="h6">michailsuper@gmail.com</Title>
      </div>
    </section>
  );
};

export default UserInformation;
