import * as constant from "../constants";

const API_TOKEN = constant.API_TOKEN;
const ENDPOINT = constant.ENDPOINT_UPCOMING;

const requestHeader = {
  method: "get",
  headers: {
    "x-access-token": API_TOKEN
  }
};

const upcomingService = () => {
  return {
    getUpcoming: () => fetch(ENDPOINT, requestHeader).then((d) => (d).json()),
  };
};

export default upcomingService();
