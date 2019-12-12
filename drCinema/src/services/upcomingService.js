import * as constant from '../constants';

const { API_TOKEN, ENDPOINT_UPCOMING } = constant;
const ENDPOINT = ENDPOINT_UPCOMING;

const requestHeader = {
  method: 'get',
  headers: {
    'x-access-token': API_TOKEN,
  },
};

const upcomingService = () => {
  return {
    getUpcoming: () => fetch(ENDPOINT, requestHeader).then((d) => (d).json()),
  };
};

export default upcomingService();
