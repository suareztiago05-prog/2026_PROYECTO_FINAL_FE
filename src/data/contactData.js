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
    }
]

export default contacts