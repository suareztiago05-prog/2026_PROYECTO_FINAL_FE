import { createContext, useState } from "react";
import { getContacts } from "../services/contactsService";

export const ContactsContext = createContext({
    contacts: [],
    addMessage: () => {}
});

const ContactsContextProvider = ({ children }) => {

    const initialContacts = getContacts();
    const [contactsState, setContactsState] = useState(initialContacts);

    const addMessage = (contactId, newMessage) => {

    const updatedContacts = contactsState.map(contact => {

        if (Number(contact.id) === Number(contactId)) {

            return {
                ...contact,
                messages: [
                    ...contact.messages,
                    {
                        id: Date.now(),
                        text: newMessage,
                        send_by_me: true,
                        created_at: new Date().toISOString(),
                        is_read: false
                    }
                ]
            };
        }

        return contact;
    });

    setContactsState(updatedContacts);
};

    const provider_values = {
        contacts: contactsState,
        addMessage
    };

    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsContextProvider;