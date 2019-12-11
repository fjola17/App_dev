import * as constant from '../constants';

const API_TOKEN = constant.API_TOKEN;
const ENDPOINT = constant.ENDPOINT_THEATERS;

const requestHeader = {
  method: 'get',
  headers: {
    'x-access-token': API_TOKEN,
  },
};

const cinemaService = () => {
  return {
    getAllCinemas: () => fetch(ENDPOINT, requestHeader).then((d) => d.json()),
  };
};

export default cinemaService();
