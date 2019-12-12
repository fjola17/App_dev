import * as constant from '../constants';

const { API_TOKEN, ENDPOINT_THEATERS } = constant;
const ENDPOINT = ENDPOINT_THEATERS;


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
