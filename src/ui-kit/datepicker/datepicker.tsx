import { FC } from 'react';
import DatePickerLibrary from 'react-datepicker';
import { ru } from 'date-fns/locale';

import { Nullable } from 'types';

import { Input } from 'ui-kit/input';

import { dateFormat } from 'constants/date';

import { DatePickerProps } from './type';

const DatePicker: FC<DatePickerProps> = (props) => {
  const { onChange, value } = props;

  const handleChangeDate = (date: Nullable<Date>) => {
    onChange(date);
  };

  return (
    <DatePickerLibrary
      dateFormat={dateFormat}
      selected={value}
      locale={ru}
      onChange={handleChangeDate}
      customInput={<Input />}
    />
  );
};

export default DatePicker;
