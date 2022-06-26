import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import AvatarImage from 'public/static/images/user-avatar.png';

import Title from 'ui-kit/title';

import styles from './user-information.module.scss';

const UserInformation: FC = () => {
  return (
    <div className={cn('flex-row flex-align_center', styles.userContainer)}>
      <Image width={55} height={55} src={AvatarImage} unoptimized />

      <div className={cn('flex-column', styles.userInformation)}>
        <Title variant="h3">Михаил Цветков</Title>
        <Title variant="h6">michailsuper@gmail.com</Title>
      </div>
    </div>
  );
};

export default UserInformation;
