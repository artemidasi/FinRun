import { CSSProperties, FC } from 'react';
import cn from 'classnames';

import { ProgressbarProps } from './type';

import styles from './progressbar.module.scss';

const Progressbar: FC<ProgressbarProps> = (props) => {
  const { percent = 0 } = props;

  const style = {
    width: `${percent}%`,
  } as CSSProperties;

  return (
    <div className={cn('full-width', styles.container)}>
      <div style={style} className={cn('full-width', styles.result)} />
    </div>
  );
};

export default Progressbar;
