import { createContext, FC, useEffect, useState } from 'react';

import useWindowDimensions from 'hooks/useWindowDimensions.hook';
import { WindowType } from 'types/window';
import { WindowSize } from 'constants/window';

export const windowContext = createContext(WindowType.desktop);

const { Provider } = windowContext;

const WindowProvider: FC = (props) => {
  const { children } = props;

  const [type, setType] = useState(WindowType.desktop);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > WindowSize[WindowType.tablet]) {
      setType(WindowType.desktop);
    } else if (
      width <= WindowSize[WindowType.tablet] &&
      width > WindowSize[WindowType.mobile]
    ) {
      setType(WindowType.tablet);
    } else {
      setType(WindowType.mobile);
    }
  }, [width]);

  return <Provider value={type}>{children}</Provider>;
};

export default WindowProvider;
