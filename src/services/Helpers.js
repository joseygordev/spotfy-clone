import { differenceInMinutes } from 'date-fns';

import { accessUrl } from './Spotfy';

import { REFRESH_TIME } from '../constants/config';

export const normarlizeString = (str) => {
  if (str.normalize !== undefined) {
    str = str.normalize('NFKD');
  }
  return str.replace(/[\u0300-\u036F]/g, '').toLocaleLowerCase();
};

export const checkRefresh = (auth, hashToken) => {
  const getDifference = () =>
    differenceInMinutes(new Date(), new Date(auth.lastUpdate));

  const check = () => {
    if (REFRESH_TIME <= getDifference()) {
      window.location.href = accessUrl;
    }
  };

  setInterval(() => {
    check();
  }, 60000);

  if (!hashToken) {
    check();
  }
};
