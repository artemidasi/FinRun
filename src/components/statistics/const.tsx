import { TitleVariant } from 'ui-kit/title/type';

import BalanceChart from './components/balance';
import SavingChart from './components/saving-chart';
import RationalVsIrrationalChart from './components/rational-vs-irrational';
import ActiveVsPassiveChart from './components/active-vs-passive';

export const statistics = [
  {
    title: 'Баланc доходов и расходов',
    chart: <BalanceChart />,
  },
  {
    title: 'Сэкономлено всего',
    chart: <SavingChart />,
  },
  {
    title: 'Рационнальные vs. иррациональные расходы',
    chart: <RationalVsIrrationalChart />,
  },
  {
    title: 'Активные vs. пассивные доходы',
    chart: <ActiveVsPassiveChart />,
  },
];

export const variantTitle: TitleVariant = 'h3';
