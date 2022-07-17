import * as yup from 'yup';

import { RequiredSchema } from 'constants/schema';

import { Values } from './type';

export const authSchema: yup.SchemaOf<Values> = yup.object({
  username: RequiredSchema,
  password: RequiredSchema,
});
