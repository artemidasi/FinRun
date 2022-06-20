import { useCustomRouter } from 'hooks/useCustomRouter.hook';

import { LocalKey } from 'constants/local-storage';

import { removeState } from 'utils/localStorage';

import { Links } from 'types/links';

import { useAppDispatch } from 'store';
import { setReset } from 'reducers/userSlice';

export const useResetApp = (redirectTo?: Links) => {
  const dispatch = useAppDispatch();

  const router = useCustomRouter();

  return (): void => {
    router.push(redirectTo ?? Links.organization);
    dispatch(setReset());
    removeState(LocalKey.token);
  };
};
