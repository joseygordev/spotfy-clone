import { SPOTFY_API_AUTH, SPOTFY_CLIENT_ID } from '../constants/config';

const redirectUri = 'http://localhost:3000/';

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${SPOTFY_API_AUTH}?client_id=${SPOTFY_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
