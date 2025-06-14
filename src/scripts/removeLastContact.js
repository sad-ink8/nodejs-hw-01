import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.splice(contacts.length - 1, 1);
      await writeContacts(contacts);
    } else {
      console.log('no contacts');
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
