import { SPOTFY_API_BASE } from '../constants/config';
import { accessUrl } from './Spotfy';

export const requestPlaylist = (token, queryParams = '') => {
  return fetch(`${SPOTFY_API_BASE}${queryParams}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((request) => {
      return request.json();
    })
    .then((response) => {
      if (response?.error?.status === 401) {
        window.location.href = accessUrl;
      } else {
        return response;
      }
    });
};
