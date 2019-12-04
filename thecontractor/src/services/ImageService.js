import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import { onException } from './FileService';

const imageDirectory = `${FileSystem.documentDirectory}/Images`;

export const getPermissions = async (permissionTypes) => {
  await Promise.all(permissionTypes.map(async (type) => Permission.askAsync(type)));
};

export const selectFromCameraRoll = async () => {
  await getPermissions([Permission.CAMERA_ROLL]);
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9],
  });

  if (result.cancelled) { return ''; }
  return result.uri;
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(imageDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory);
  }
};
export const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});


const loadImage = async (fileName) => {
  await setupDirectory(); // check if directory already exists
  return FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.Base64,
  });
};

export const addImage = async (imageLocation) => {
  const foldersplit = imageLocation.split('/');
  const fileName = foldersplit[foldersplit.length - 1];
  await onException(() => copyFile(imageLocation, `${imageDirectory}/${fileName}`));

  return {
    name: fileName,
    type: 'image',
    file: `data:image/jpeg;base64,${await loadImage(fileName)}`,
  };
};
