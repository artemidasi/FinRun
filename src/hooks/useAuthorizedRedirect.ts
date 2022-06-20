import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Links } from 'types/links';

import { useCustomRouter } from './useCustomRouter.hook';

import { RootState } from 'store';
import { OrganizationState } from 'reducers/organizationSlice';
import { AuthState } from 'reducers/authSlice';

export const useAuthorizedRedirect = () => {
  const router = useCustomRouter();
  const { name } = useSelector<RootState, OrganizationState>(
    ({ organization }) => organization,
  );
  const { token } = useSelector<RootState, AuthState>(({ auth }) => auth);

  useEffect(() => {
    if (name) {
      const timeoutId = setTimeout(
        () => router.replace(token ? Links.home : Links.auth),
        2000,
      );

      () => {
        clearTimeout(timeoutId);
      };
    }
  }, [name]);
};
