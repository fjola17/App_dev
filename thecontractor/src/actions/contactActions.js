import * as constants from '../constants';

const filterusers = ({ id, name, phone, image }) => ({
  type: constants.FILTER,
  payload: { id, name, phone, image },
});

export default {
  filterusers,
};
