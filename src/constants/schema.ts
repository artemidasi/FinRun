import * as yup from 'yup';

const RequiredText = 'Это поле обязательно для заполения';

export const RequiredSchema = yup.string().required(RequiredText);
