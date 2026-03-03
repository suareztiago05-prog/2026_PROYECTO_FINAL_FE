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
        <div style={styles.container}>

            {/* Header */}
            <div style={styles.header}>
                <h2 style={styles.title}>Springfield Chat</h2>
            </div>

            {/* Lista */}
            <div style={styles.chatList}>
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
                                style={styles.link}
                            >
                                <div style={styles.contactItem}>

                                    <img
                                        src={contact.profile_picture}
                                        alt={contact.name}
                                        style={styles.avatar}
                                    />

                                    <div style={styles.contactContent}>

                                        <div style={styles.topRow}>

                                            <strong style={styles.contactName}>
                                                {contact.name}
                                            </strong>

                                            <span style={styles.time}>
                                                {lastMessage
                                                    ? new Date(lastMessage.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                                    : ""}
                                            </span>

                                        </div>

                                        <div style={styles.bottomRow}>

                                            <span style={styles.preview}>
                                                {lastMessage
                                                    ? `${lastMessage.send_by_me ? "Vos: " : ""}${lastMessage.text}`
                                                    : "Sin mensajes"}
                                            </span>

                                            {unreadCount > 0 && (
                                                <span style={styles.badge}>
                                                    {unreadCount}
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            {/* Dueño */}
            <div style={styles.ownerSection}>
                <img
                    src="https://w7.pngwing.com/pngs/469/474/png-transparent-maggie-simpson-marge-simpson-homer-simpson-lisa-simpson-bart-simpson-homero-television-springfield-cartoon.png"
                    alt="Maggie"
                    style={styles.ownerAvatar}
                />
                <div>
                    <strong style={styles.ownerName}>Maggie</strong>
                    <div style={styles.ownerSub}>
                        Creador de este proyecto
                    </div>
                </div>
            </div>

        </div>
    )
}

const styles = {

    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        maxWidth: "380px",
        borderRight: "1px solid #e5e5e5",
        backgroundColor: "#ffffff"
    },

    header: {
        padding: "18px",
        borderBottom: "1px solid #eaeaea",
        backgroundColor: "#f7f7f7"
    },

    title: {
        margin: 0,
        fontSize: "20px",
        fontWeight: "600",
        color: "#111b21" // más oscuro
    },

    chatList: {
        flex: 1,
        overflowY: "auto"
    },

    link: {
        textDecoration: "none",
        color: "inherit"
    },

    contactItem: {
        display: "flex",
        gap: "12px",
        padding: "14px 16px",
        borderBottom: "1px solid #f0f2f5",
        cursor: "pointer",
        transition: "background 0.2s ease"
    },

    avatar: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        objectFit: "cover",
        flexShrink: 0
    },

    contactContent: {
        flex: 1,
        minWidth: 0
    },

    topRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    contactName: {
        fontSize: "16px",
        fontWeight: "600",
        color: "#111b21" // fuerte y legible
    },

    time: {
        fontSize: "12px",
        color: "#667781" // gris WhatsApp real
    },

    bottomRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "6px"
    },

    preview: {
        fontSize: "14px",
        color: "#667781",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "200px"
    },

    badge: {
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        minWidth: "22px",
        height: "22px",
        fontSize: "12px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px"
    },

    ownerSection: {
        padding: "16px",
        borderTop: "1px solid #eaeaea",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#fafafa"
    },

    ownerAvatar: {
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        objectFit: "cover"
    },

    ownerName: {
        color: "#111b21",
        fontWeight: "600"
    },

    ownerSub: {
        fontSize: "12px",
        color: "#667781"
    }

}