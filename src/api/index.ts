import { UserInformation } from './../types/user';
import axiosBase, { AxiosResponse } from 'axios';
import store from 'store';
import { User, UserPassword } from 'types/user';
import { Confirmation } from 'types/confirmation';
import { OrganizationType } from 'types/organization';
import { ResetState } from 'reducers/resetPasswordSlice';
import { patchNewPasswordPayload } from '../components/drop-password/constants';

export const axios = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use((config) => {
  const { auth } = store.getState();
  if (auth?.token) {
    config.headers.Authorization = `Bearer ${auth?.token}`;
  }
  return config;
});

export const fetchAuth = async <TypeParams>(
  params: TypeParams,
): Promise<{ access_token: string }> => {
  return (await axios.post('/auth/login', params)).data;
};

export const fetchRegistration = async <TypeParams>(
  params: TypeParams,
): Promise<{ success: boolean }> => {
  return (await axios.post('/auth/registration', params)).data;
};

export const fetchUser = async (): Promise<AxiosResponse<User>> => {
  return await axios.get('/user');
};

export const fetchUpdateUser = async (
  payload: UserInformation,
): Promise<AxiosResponse<User>> => {
  return await axios.patch('/user-info', payload);
};

export const fetchUpdatePasswordUser = async (
  payload: UserPassword,
): Promise<AxiosResponse<User>> => {
  return await axios.patch('/user-password', payload);
};

export const postEmailConfirmation = async (
  id: string | string[],
): Promise<Confirmation> => {
  return (await axios.patch(`/confirm/${id}`)).data;
};

export const getOrganizationData = async (
  orgName: string,
): Promise<OrganizationType> => {
  return (await axios.get(`organisation/${orgName}`)).data;
};

export const postDropPasswordEmail = async <TypeParams>(
  params: TypeParams,
): Promise<{ success: boolean }> => {
  return (await axios.post('/drop-password-email', params)).data;
};

export const patchNewPassword = async (
  payload: patchNewPasswordPayload,
): Promise<ResetState> => {
  return await axios.patch(
    `/drop-password/${payload.id}?email=${payload.email}`,
    {
      newPassword: payload.newPassword,
    },
  );
};

export const postResetPasswordLinkTimeCheck = async (
  payload: string | string[],
): Promise<ResetState> => {
  return await axios.post(`drop-password-timeCheck/${payload}`);
};
