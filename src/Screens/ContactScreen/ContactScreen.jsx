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
  <div className="app-container">

    <div className="sidebar">
      <ContactSidebar />
    </div>

    {
      !contact_selected
        ? (
          <div className="chat-container">
            <h1>El contacto seleccionado no existe</h1>
          </div>
        )
        : (
          <div className="chat-container">

            <h2>Chat con {contact_selected.name}</h2>

            <div className="messages-container">
              {
                contact_selected.messages.map(message => (
                  <div
                    key={message.id}
                    className={`message ${message.send_by_me ? "me" : "other"}`}
                  >
                    <p>{message.text}</p>
                    <span>
                      {new Date(message.created_at).toLocaleTimeString()}
                    </span>
                  </div>
                ))
              }
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="message" style={{ display: "none" }}>
                Escribe un mensaje
              </label>

              <textarea
                id="message"
                aria-label="Escribe un mensaje"
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

