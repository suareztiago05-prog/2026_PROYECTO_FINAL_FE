import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router-dom'

export default function ContactSidebar() {

    const { contacts } = useContext(ContactsContext)

    const getLastMessage = (messages) => {
        if (!messages || messages.length === 0) return null

        return [...messages].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        )[0]
    }

    const sortedContacts = [...contacts].sort((a, b) => {
        const lastA = getLastMessage(a.messages)
        const lastB = getLastMessage(b.messages)

        if (!lastA) return 1
        if (!lastB) return -1

        return new Date(lastB.created_at) - new Date(lastA.created_at)
    })

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>

            <h2 style={{ padding: "15px" }}>Whatsapp Clone</h2>

            <div style={{ flex: 1, overflowY: "auto" }}>
                {
                    sortedContacts.map((contact) => {

                        const lastMessage = getLastMessage(contact.messages)

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
                                                justifyContent: "space-between"
                                            }}>

                                                <strong>{contact.name}</strong>

                                                <span style={{ fontSize: "12px", opacity: 0.7 }}>
                                                    {lastMessage
                                                        ? new Date(lastMessage.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                                        : ""}
                                                </span>

                                            </div>

                                            <div style={{
                                                display: "flex",
                                                justifyContent: "space-between",
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

            {/* 👇 Dueño del WhatsApp */}
            <div style={{
                padding: "15px",
                borderTop: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
                <img
                    src="https://w7.pngwing.com/pngs/835/638/png-transparent-bart-simpson-homer-simpson-marge-simpson-maggie-simpson-dr-hibbert-homero-cartoon-fictional-character-simpsons.png"
                    alt="Hugo"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                />
                <div>
                    <strong>Hugo</strong>
                    <div style={{ fontSize: "12px", opacity: 0.7 }}>
                        Dueño del WhatsApp
                    </div>
                </div>
            </div>

        </div>
    )
}