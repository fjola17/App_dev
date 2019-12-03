import * as FileSystem from 'expo-file-system';

const contactDir = `${FileSystem.documentDirectory}/contacts`;

// eslint-disable-next-line consistent-return
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

export const getContacts = async () => {
  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDir));
  // eslint-disable-next-line arrow-body-style
  const data = await Promise.all(result.map(async (filename) => getContact(filename)));
  return data;
};

export const createContact = async (data) => {
  const newf = data.name.toLowerCase().replace(' ', '-');
  const fileuri = contactDir + '/' + newf + '.json';
  const jsonstr = JSON.stringify(data);
  await setupDirectory();
  await FileSystem.writeAsStringAsync(fileuri, jsonstr);
};

const getContact = async (fileName) => {
  const dat = await onException(() => FileSystem.readAsStringAsync(`${contactDir}/${fileName}`), {
      encoding: FileSystem.EncodingType.UTF8,
  });
  return JSON.parse(dat);
};
