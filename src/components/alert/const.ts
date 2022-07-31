import { AlertStatus, SectionName } from 'hooks/useCustomRouter.hook';
import { Content } from './type';

export const getContent = (email: string): Content => {
  return {
    [SectionName.registration]: {
      [AlertStatus.success]: {
        title: 'Письмо успешно отправлено',
        text: `Мы отправили письмо на вашу элеетронную почту: ${email}. Для завершения
        регистрации, пройдите по ссылке, которая приложена к письму`,
      },
      [AlertStatus.error]: {
        title: 'При отправке письма возникли проблемы',
        text: `Извините, мы не смогли отправить письмо на Вашу почту. Попробуйте зарегестрироваться позже, или обратитесь к техподдержке для решение данный проблемы.`,
      },
      [AlertStatus.pending]: {
        title: 'Loading...',
        text: 'Loading...',
      },
    },
    [SectionName.email_confirmation]: {
      [AlertStatus.success]: {
        title: 'Почта успешно проверенна',
        text: 'Поздравляем, теперь вы можете пользоваться нашим приложением и входить в свою учетную запись. Спасибо, что выбрали именно нас! Мы это ценим, и будем стараться делать приложение удобнее и полезнее для Вас',
      },
      [AlertStatus.error]: {
        title: 'Почта не подтверждена',
        text: 'Вы перешли по ссылке, которая уже не действительна. Просьба пройти регистрацию повторно и перейти именно по той ссылке, которая будет приложена к письму. Ждем Вас в нашем приложение после регистрации.',
      },
      [AlertStatus.pending]: {
        title: 'Loading...',
        text: 'Loading...',
      },
    },
  };
};
