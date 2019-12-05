import * as FileSystem from 'expo-file-system';

const contactDir = `${FileSystem.documentDirectory}Contacts`;

// eslint-disable-next-line consistent-return
export const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDir);
  if (!dir.exists) {
    await onException(() => FileSystem.makeDirectoryAsync(contactDir));
  }
};

export const cleanDirectory = async () => {
  try {
    await onException(() => FileSystem.deleteAsync(contactDir, { idempotent: true }));
    await setupDirectory();
  } catch (error) {
    console.log('cleanDirectory: Error: ', error);
  }
};

// eslint-disable-next-line arrow-body-style
export const remove = async (name) => {
  console.log(name);
  // eslint-disable-next-line no-return-await
  return await onException(() => FileSystem.deleteAsync(name, { idempotent: true }));
};

export const getContact = async (fileName) => {
  const dat = await onException(() => FileSystem.readAsStringAsync(`${contactDir}/${fileName}`), {
    encoding: FileSystem.EncodingType.UTF8,
  });
  return JSON.parse(dat);
};

export const getContacts = async () => {
  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDir));
  // eslint-disable-next-line arrow-body-style
  const data = await Promise.all(result.map(async (filename) => getContact(filename)));
  return data;
};

export const createContact = async (data) => {
  await setupDirectory();
  const newf = data.name.toLowerCase().replace(/[^a-z0-9_]/gi, '-');
  const fileuri = `${contactDir}/${newf}.json`;
  const jsonstr = JSON.stringify(data);
  await onException(() => FileSystem.writeAsStringAsync(fileuri, jsonstr));
};

export const AddOrModifyContact = async (curr, data) => {
  if (curr.name !== '' || !curr.name) {
    const newf = curr.name.toLowerCase().replace(/[^a-z0-9_]/gi, '-');
    const fileuri = `${contactDir}/${newf}.json`;
    await remove(fileuri);
  }
  // const file = `${contactDir}/${data}.json`;
  // const dir = await FileSystem.getInfoAsync(file);
  await createContact(data);
};
