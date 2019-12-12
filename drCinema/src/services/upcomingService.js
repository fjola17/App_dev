import * as constant from '../constants';

const { API_TOKEN, ENDPOINT } = constant;

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
