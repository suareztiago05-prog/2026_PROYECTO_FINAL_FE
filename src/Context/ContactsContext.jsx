import { createContext, useState } from "react";
import { getContacts } from "../services/contactsService";

export const ContactsContext = createContext({
    contacts: [],
    addMessage: () => {}
});

const ContactsContextProvider = ({ children }) => {

    const initialContacts = getContacts();
    const [contactsState, setContactsState] = useState(initialContacts);

    // 🔥 Función para agregar mensaje a un contacto
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
                            time: new Date().toLocaleTimeString(),
                            send_by_me: true
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