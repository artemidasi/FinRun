import { Languages } from './const';

export const getCalendarString = ({
  dayEnd,
  dayStart,
  lang = Languages.RU,
}: {
  lang?: Languages;
  dayStart: string;
  dayEnd: string;
}) => {
  let dayStartString = dayStart;
  let dayEndString = dayEnd;

  if (lang === Languages.RU) {
    dayStartString = dayStartString.split('г.')[0];
    dayEndString = dayEndString.split('г.')[0];
  }

  return `${dayStartString} - ${dayEndString}`;
};
