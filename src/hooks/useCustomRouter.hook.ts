import { NextRouter, useRouter } from 'next/router';

export type CustomRouter = NextRouter & {
  query: QueryParams;
};

export interface QueryParams {
  day_start?: string;
  month_start?: string;
  year_start?: string;
  day_end?: string;
  month_end?: string;
  year_end?: string;
  email?: string;
  section_name?: SectionName;
  alert_status?: AlertStatus;
  token?: string;
  id?: string;
}

export enum AlertStatus {
  pending = 'pending',
  success = 'success',
  error = 'error',
}

export enum SectionName {
  registration = 'registration',
  email_confirmation = 'email_confirmation',
}

export const useCustomRouter = () => {
  const router: CustomRouter = useRouter();

  return router;
};
