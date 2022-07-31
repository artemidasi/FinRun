import { AlertStatus, SectionName } from 'hooks/useCustomRouter.hook';

export type Content = {
  [k in SectionName]: {
    [k in AlertStatus]: TextInformation;
  };
};

export interface TextInformation {
  title: string;
  text: string;
}
