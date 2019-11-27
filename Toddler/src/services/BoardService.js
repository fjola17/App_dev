import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';

export const getPermissions = async (permissionTypes) => {
  await Promise.all(permissionTypes.map(async (type) => Permission.askAsync(type)));
};

export const selectFromCameraRoll = async () => {

};

export const takePhoto = async () => {
  await getPermissions([Permission.CAMERA, Permission.CAMERA_ROLL]);
  const results = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9],
  });

  if (results.cancelled) { return ''; }
  return results.uri;
};


const data = require('../resources/data');

module.exports.getAllBoards = () => data.boards;

module.exports.createBoard = (boards, newb) => [...boards, newb];
