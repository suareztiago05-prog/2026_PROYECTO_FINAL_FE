const contacts = [

    {
        id: 1,
        name: 'Homero',
        last_time_connection: 'Hace 1 minuto',
        profile_picture: 'https://w7.pngwing.com/pngs/723/455/png-transparent-homer-simpson-bart-simpson-lisa-simpson-marge-simpson-peter-griffin-simpsons-homer-simpson-face-heroes-springfield.png',
        messages: [
            {
                id: 1,
                text: 'Estoy en la taberna con Moe 🍺',
                send_by_me: false,
                created_at: '2024-06-01T19:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'No tardes mucho...',
                send_by_me: true,
                created_at: '2024-06-01T19:02:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Creo que gané algo en una máquina rara… 🎰',
                send_by_me: false,
                created_at: '2024-06-01T19:10:00Z',
                is_read: false
            }
        ]
    },

    {
        id: 2,
        name: 'Marge',
        last_time_connection: 'Hace 2 minutos',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
        messages: [
            {
                id: 1,
                text: 'Homero no responde hace 40 minutos...',
                send_by_me: false,
                created_at: '2024-06-01T19:30:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Seguro está celebrando algo 🙄',
                send_by_me: true,
                created_at: '2024-06-01T19:31:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Moe dice que se fue “a hacer negocios”... eso me preocupa 😟',
                send_by_me: false,
                created_at: '2024-06-01T19:32:00Z',
                is_read: false
            }
        ]
    },

    {
        id: 3,
        name: 'Lisa',
        last_time_connection: 'Hace 5 minutos',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
        messages: [
            {
                id: 1,
                text: 'Estoy investigando. Moe miente.',
                send_by_me: false,
                created_at: '2024-06-01T19:33:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Cómo sabes?',
                send_by_me: true,
                created_at: '2024-06-01T19:34:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Sus patrones de lenguaje cambiaron. Claramente está encubriendo algo.',
                send_by_me: false,
                created_at: '2024-06-01T19:35:00Z',
                is_read: false
            }
        ]
    },

    {
        id: 4,
        name: 'BART',
        last_time_connection: 'Hace 8 minutos',
        profile_picture: 'https://www.clipartmax.com/png/full/109-1090322_el-barto-bart-simpson-el-barto.png',
        messages: [
            {
                id: 1,
                text: 'Creo que papá apostó la tele…',
                send_by_me: false,
                created_at: '2024-06-01T19:20:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'QUÉ?',
                send_by_me: true,
                created_at: '2024-06-01T19:21:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Relajate, ahora tenemos una máquina tragamonedas en el living 😎',
                send_by_me: false,
                created_at: '2024-06-01T19:22:00Z',
                is_read: false
            }
        ]
    },

    {
        id: 5,
        name: 'Milhouse',
        last_time_connection: 'Hace 10 minutos',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png',
        messages: [
            {
                id: 1,
                text: 'Bart dijo que era inversión familiar…',
                send_by_me: false,
                created_at: '2024-06-01T19:23:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Milhouse…',
                send_by_me: true,
                created_at: '2024-06-01T19:24:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Mi papá dice que esto termina en desastre 😰',
                send_by_me: false,
                created_at: '2024-06-01T19:25:00Z',
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
                text: 'Homero no está acá… oficialmente.',
                send_by_me: false,
                created_at: '2024-06-01T19:36:00Z',
                is_read: false
            }
        ]
    },

    {
        id: 7,
        name: 'Director Skinner',
        last_time_connection: 'Hace 15 minutos',
        profile_picture: 'https://w7.pngwing.com/pngs/450/979/png-transparent-the-simpsons-character-illustration-principal-skinner-gary-chalmers-edna-krabappel-cletus-spuckler-mr-burns-the-simpsons-television-human-cartoon.png',
        messages: [
            {
                id: 1,
                text: 'Bart introdujo una máquina tragamonedas en la escuela.',
                send_by_me: false,
                created_at: '2024-06-01T19:10:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Eso explica muchas cosas...',
                send_by_me: true,
                created_at: '2024-06-01T19:11:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Voy a citar a Homero mañana.',
                send_by_me: false,
                created_at: '2024-06-01T19:12:00Z',
                is_read: false
            }
        ]
    },

    {
        id: 8,
        name: 'Jefe Gorgory',
        last_time_connection: 'Hace 3 minutos',
        profile_picture: 'https://w7.pngwing.com/pngs/465/548/png-transparent-chief-wiggum-ralph-wiggum-homer-simpson-maggie-simpson-lisa-simpson-bart-simpson-springfield-vertebrate-cartoon.png',
        messages: [
            {
                id: 1,
                text: 'Recibimos denuncia por actividad sospechosa en la taberna.',
                send_by_me: false,
                created_at: '2024-06-01T19:40:00Z',
                is_read: false
            }
        ]
    },

    {
        id: 9,
        name: 'Sr. Burns',
        last_time_connection: 'Hace 20 minutos',
        profile_picture: 'https://w7.pngwing.com/pngs/3/176/png-transparent-mr-burns-homer-simpson-waylon-smithers-principal-skinner-ned-flanders-burns-television-springfield-vertebrate.png',
        messages: [
            {
                id: 1,
                text: 'Me informaron que Homero ganó dinero.',
                send_by_me: false,
                created_at: '2024-06-01T19:15:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Eso sería histórico.',
                send_by_me: true,
                created_at: '2024-06-01T19:16:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Eso no puede quedar así… excelente.',
                send_by_me: false,
                created_at: '2024-06-01T19:17:00Z',
                is_read: false
            }
        ]
    }

]

export default contacts