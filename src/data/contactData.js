const contacts = [
    {
        id: 1,
        name: 'Homero',
        last_time_connection: 'Hace 1 minuto',
        profile_picture: 'https://media.tycsports.com/files/2024/04/19/705992/homero-simpson_416x234.webp',
        messages: [
            {
                id: 1,
                text: 'Estoy en la taberna con Moe 🍺',
                send_by_me: false,
                created_at: '2024-06-01T18:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Otra vez?',
                send_by_me: true,
                created_at: '2024-06-01T18:02:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Solo una cerveza… bueno, tal vez 5 😏',
                send_by_me: false,
                created_at: '2024-06-01T18:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'BART',
        last_time_connection: 'Hace 20 minutos',
        profile_picture: 'https://www.clipartmax.com/png/full/109-1090322_el-barto-bart-simpson-el-barto.png',
        messages: [
            {
                id: 1,
                text: 'Milhouse y yo hicimos algo increíble 😎',
                send_by_me: false,
                created_at: '2024-06-01T17:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Qué hicieron ahora?',
                send_by_me: true,
                created_at: '2024-06-01T17:02:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Digamos que el director Skinner no va a estar feliz mañana...',
                send_by_me: false,
                created_at: '2024-06-01T17:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 3,
        name: 'Lisa',
        last_time_connection: 'Hace 10 minutos',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
        messages: [
            {
                id: 1,
                text: '¿Sabías que el consumo excesivo de alcohol afecta la corteza prefrontal?',
                send_by_me: false,
                created_at: '2024-06-01T18:06:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Se lo estás diciendo a Homero?',
                send_by_me: true,
                created_at: '2024-06-01T18:07:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Alguien tiene que ser la voz de la razón en esta familia 🙄',
                send_by_me: false,
                created_at: '2024-06-01T18:08:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 4,
        name: 'Marge',
        last_time_connection: 'Hace 2 minutos',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
        messages: [
            {
                id: 1,
                text: 'Homero está otra vez en la taberna...',
                send_by_me: false,
                created_at: '2024-06-01T18:03:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Me dijo que solo iba por una cerveza',
                send_by_me: true,
                created_at: '2024-06-01T18:04:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Eso mismo dijo la última vez 😒',
                send_by_me: false,
                created_at: '2024-06-01T18:06:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 5,
        name: 'Milhouse',
        last_time_connection: 'Hace 15 minutos',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png',
        messages: [
            {
                id: 1,
                text: 'Bart dijo que era buena idea...',
                send_by_me: false,
                created_at: '2024-06-01T17:10:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Qué hicieron?',
                send_by_me: true,
                created_at: '2024-06-01T17:12:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Pintamos algo en la oficina del director 😰',
                send_by_me: false,
                created_at: '2024-06-01T17:15:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 6,
        name: 'Moe',
        last_time_connection: 'Hace 1 minuto',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/8/80/Moe_Szyslak.png',
        messages: [
            {
                id: 1,
                text: 'Decile a Marge que Homero está “reunido de negocios” 🍺',
                send_by_me: false,
                created_at: '2024-06-01T18:07:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts