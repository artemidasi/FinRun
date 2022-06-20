import { NextPage } from 'next';

import BackendError from 'components/backend_error/backend_error';

const ServiceUnavailable: NextPage = () => {
  return <BackendError />;
};

export default ServiceUnavailable;
