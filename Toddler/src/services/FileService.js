import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}images`;

export const copyFile = async (file, newLocation) => {
  return FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
};

const loadImage = async (fileName) => {
  return FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.Base64,
  });
};

export const addImage = async (imageLocation) => {
  const foldersplit = imageLocation.split('/');
  const fileName = foldersplit[foldersplit.length - 1];
  await copyFile(imageLocation, `${imageLocation}/${fileName}`);

  return {
    name: fileName,
    file: await loadImage(fileName),
  };
};
