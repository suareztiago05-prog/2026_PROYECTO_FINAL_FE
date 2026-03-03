import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router-dom'

export default function ContactSidebar() {

    const { contacts } = useContext(ContactsContext)

    const sortedContacts = [...contacts].sort((a, b) => {
        const lastMessageA = a.messages[a.messages.length - 1]
        const lastMessageB = b.messages[b.messages.length - 1]

        return new Date(lastMessageB.created_at) - new Date(lastMessageA.created_at)
    })

    return (
        <div>

            <h2 style={{ padding: "15px" }}>Whatsapp Clone</h2>

            <div>
                {
                    sortedContacts.map((contact) => {

                        const lastMessage = contact.messages[contact.messages.length - 1]

                        const unreadCount = contact.messages.filter(
                            msg => !msg.is_read && !msg.send_by_me
                        ).length

                        return (
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

                                            <div style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>

                                                <strong>{contact.name}</strong>

                                                <span style={{ fontSize: "12px", opacity: 0.7 }}>
                                                    {lastMessage
                                                        ? new Date(lastMessage.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                                        : contact.last_time_connection}
                                                </span>

                                            </div>

                                            <div style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginTop: "4px"
                                            }}>

                                                <span style={{
                                                    fontSize: "13px",
                                                    opacity: 0.7,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    maxWidth: "180px"
                                                }}>
                                                    {lastMessage
                                                        ? `${lastMessage.send_by_me ? "Vos: " : ""}${lastMessage.text}`
                                                        : "Sin mensajes"}
                                                </span>

                                                {unreadCount > 0 && (
                                                    <span style={{
                                                        backgroundColor: "#25D366",
                                                        color: "white",
                                                        borderRadius: "50%",
                                                        minWidth: "20px",
                                                        height: "20px",
                                                        fontSize: "12px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        padding: "4px",
                                                        marginLeft: "8px"
                                                    }}>
                                                        {unreadCount}
                                                    </span>
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}