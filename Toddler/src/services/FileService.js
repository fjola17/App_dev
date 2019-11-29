import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}images`;

const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
  }
};
export const cleanDirectory = async () => {
  await FileSystem.deleteAsync(imageDirectory);
};

export const copyFile = async (file, newLocation) => {
  return FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
};

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

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(imageDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory);
  }
};
