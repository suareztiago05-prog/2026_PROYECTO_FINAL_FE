import React, { useContext, useState } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router-dom'
import { ContactsContext } from '../../Context/ContactsContext'

export default function ContactScreen() {

  const { contacts, addMessage } = useContext(ContactsContext)
  const { contact_id } = useParams()

  const contact_selected = contacts.find(
    contact => Number(contact.id) === Number(contact_id)
  )

  const [newMessage, setNewMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newMessage.trim()) return

    addMessage(contact_id, newMessage)
    setNewMessage("")
  }

  return (
    <div>
      <ContactSidebar />

      {
        !contact_selected
          ? (
            <div>
              <h1>El contacto seleccionado no existe</h1>
            </div>
          )
          : (
            <div>
              <h1>Chat con {contact_selected.name}</h1>

              <div>
                {
                  contact_selected.messages.map(message => (
                    <div key={message.id}>
                      {
                        message.send_by_me
                          ? <h3>Enviado por mí</h3>
                          : <h3>Enviado por {contact_selected.name}</h3>
                      }
                      <p>{message.text}</p>
                      <span>{message.time}</span>
                      <hr />
                    </div>
                  ))
                }
              </div>

              <form onSubmit={handleSubmit}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  placeholder="Escribe un mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit">Enviar</button>
              </form>

            </div>
          )
      }

    </div>
  )
}