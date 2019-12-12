import * as constant from '../constants';

const { API_TOKEN, ENDPOINT_UPCOMING } = constant;
const ENDPOINT = ENDPOINT_UPCOMING;

const requestHeader = {
  method: 'get',
  headers: {
    'x-access-token': API_TOKEN,
  },
};

// eslint-disable-next-line arrow-body-style
const upcomingService = () => {
  return {
    getUpcoming: () => this.fetch(ENDPOINT, requestHeader).then((d) => (d).json()),
  };
};

export default upcomingService();
