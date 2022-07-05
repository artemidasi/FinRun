import * as yup from 'yup';

import { RequiredSchema } from 'constants/schema';

import { FormikValues } from './type';

export const ExpensesSchema: yup.SchemaOf<FormikValues> = yup.object({
  name: RequiredSchema,
  category: RequiredSchema,
  summa: RequiredSchema,
});
