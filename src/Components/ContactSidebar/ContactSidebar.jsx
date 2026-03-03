import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router-dom'

export default function ContactSidebar() {

    const { contacts } = useContext(ContactsContext)

    return (
        <div>

            <h2 style={{ padding: "15px" }}>Whatsapp Clone</h2>

            <div>
                {
                    contacts.map((contact) => (
                        <Link
                            to={`/contact/${contact.id}`}
                            key={contact.id}
                            style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                        >
                            <div className="contact-item">

                                <div className="contact-row">

                                    <img
                                        src={contact.profile_picture}
                                        alt={contact.name}
                                        className="profile-pic"
                                    />

                                    <div className="contact-info">
                                        <strong>{contact.name}</strong>
                                        <span style={{ fontSize: "12px", opacity: 0.7 }}>
                                            {contact.last_time_connection}
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}