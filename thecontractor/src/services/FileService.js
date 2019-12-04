import * as FileSystem from 'expo-file-system';

const contactDir = `${FileSystem.documentDirectory}/Contacts`;

// eslint-disable-next-line consistent-return
export const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDir);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDir);
  }
};

export const cleanDirectory = async () => {
  await onException(() => FileSystem.deleteAsync(contactDir, { idempotent: true }));
  await setupDirectory();
};

export const remove = async (name) => {
  return await onException(() => FileSystem.deleteAsync(`${imageDirectory}/${name}`, { idempotent: true }));
};

const getContact = async (fileName) => {
  const dat = await onException(() => FileSystem.readAsStringAsync(`${contactDir}/${fileName}`), {
    encoding: FileSystem.EncodingType.UTF8,
  });
  return JSON.parse(dat);
};

export const getContacts = async () => {
//  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDir));
  // eslint-disable-next-line arrow-body-style
  const data = await Promise.all(result.map(async (filename) => getContact(filename)));
  return data;
};
// export const modifyContact = async
export const createContact = async (data) => {
  // await setupDirectory();
  const newf = data.name.toLowerCase().replace(/[^a-z0-9_]/gi, '-');
  const fileuri = `${contactDir}/${newf}.json`;
  // const dir = await FileSystem.getInfoAsync(fileuri);
  const jsonstr = JSON.stringify(data);
  await onException(() => FileSystem.writeAsStringAsync(fileuri, jsonstr));
};
