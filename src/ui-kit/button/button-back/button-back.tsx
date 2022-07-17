import { FC } from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Button from 'ui-kit/button';
import { ButtonProps, ButtonSize, ButtonVariant } from 'ui-kit/button/type';

import { useCustomRouter } from 'hooks/useCustomRouter.hook';

const ButtonBack: FC<Pick<ButtonProps, 'className' | 'onClick'>> = (props) => {
  const { className, onClick } = props;

  const router = useCustomRouter();

  const handleGoBack = () => {
    router.back();

    onClick?.();
  };

  return (
    <Button
      iconLeft={
        <ArrowRightAltIcon
          sx={{
            display: 'flex',
            color: 'currentColor',
            transform: 'rotate(180deg)',
          }}
        />
      }
      onClick={handleGoBack}
      size={ButtonSize.S}
      variant={ButtonVariant.outlined}
      className={className}>
      Назад
    </Button>
  );
};

export default ButtonBack;
