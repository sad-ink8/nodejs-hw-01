import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

generateContacts(5);
