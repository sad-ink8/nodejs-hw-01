import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();

    const updatedContacts = [newContact, ...contacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

addOneContact();
