import * as FileSystem from 'expo-file-system';

const contactDir = `${FileSystem.documentDirectory}/contacts`;

const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
};

export const cleanDirectory = async () => {
  await FileSystem.deleteAsync(contactDir);
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDir);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDir);
  }
};

export const getAllContacts = () => {

};

export const createContact = () => {
  // hi
};
