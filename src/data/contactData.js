const contacts = [
    {
        id: 1,
        name: 'Homero',
        last_time_connection: 'Hace 2 horas',
        profile_picture: 'https://media.tycsports.com/files/2024/04/19/705992/homero-simpson_416x234.webp',
        messages: [
            {
                id: 1,
                text: 'Como andas paa?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Comiendo unas donas, ooouh',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'BART',
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://www.clipartmax.com/png/full/109-1090322_el-barto-bart-simpson-el-barto.png',
        messages: [
            {
                id: 1,
                text: 'Holaaa',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Grafiteamos la city?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
    id: 3,
    name: 'Lisa',
    last_time_connection: 'Hace 1 hora',
    profile_picture: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
    messages: [
        {
            id: 1,
            text: 'Estoy practicando saxofón 🎷',
            send_by_me: false,
            created_at: '2024-06-01T14:00:00Z',
            is_read: true
        }
    ]
    },
    {
    id: 4,
    name: 'Marge',
    last_time_connection: 'Hace 5 horas',
    profile_picture: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
    messages: [
        {
            id: 1,
            text: 'Homero está otra vez en la taberna...',
            send_by_me: false,
            created_at: '2024-06-01T10:00:00Z',
            is_read: true
        }
    ]
    },
    {
    id: 5,
    name: 'Milhouse',
    last_time_connection: 'Hace 30 minutos',
    profile_picture: 'https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png',
    messages: [
        {
            id: 1,
            text: 'Bart me dejó solo 😢',
            send_by_me: false,
            created_at: '2024-06-01T15:00:00Z',
            is_read: false
        }
    ]
    }
]

export default contacts