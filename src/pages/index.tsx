import Preloader from 'components/preloader';
import { useCustomRouter } from 'hooks/useCustomRouter.hook';
import { NextPage } from 'next';
import { useMount } from 'react-use';
import { Links } from 'types/links';

const StartPage: NextPage = () => {
  const router = useCustomRouter();

  useMount(() => {
    router.push(Links.auth);
  });

  return <Preloader />;
};

export default StartPage;
