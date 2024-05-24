// Items
const items = [
    {
        id: '1',
        image: 'assets/img/nft/catalog/02.jpg',
        title: 'Ocean and sky',
        currentbid: '0.5 ETH',
        bid: '(≈ $ 2,000.55)',
        profile: 'assets/img/nft/catalog/avatars/07.png',
        name: 'foxnet_creator',
        time: '12/31/2022 09:00:00 PM',
        status: 'live'
    },
    {
        id: '2',
        image: 'assets/img/nft/catalog/04.jpg',
        title: 'Astronaut surrounded by lights',
        currentbid: '0.1 ETH',
        bid: '(≈ $ 400.19)',
        profile: 'assets/img/nft/catalog/avatars/07.png',
        name: 'foxnet_creator',
        status: 'sold'
    },
    {
        id: '3',
        image: 'assets/img/nft/catalog/03.jpg',
        title: 'Aesthetic art collage',
        currentbid: '0.6 ETH',
        bid: '(≈ $ 2,400.65)',
        profile: 'assets/img/nft/catalog/avatars/07.png',
        name: 'foxnet_creator',
        status: 'sold'
    },
    {
        id: '4',
        image: 'assets/img/nft/catalog/10.jpg',
        title: 'Ocean and sky',
        currentbid: '0.5 ETH',
        bid: '(≈ $ 2,000.55)',
        profile: 'assets/img/nft/catalog/avatars/07.png',
        name: 'foxnet_creator',
        time: '12/31/2022 12:00:00 PM',
        status: 'live'
    },
    {
        id: '5',
        image: 'assets/img/nft/catalog/11.jpg',
        title: 'Aesthetic art collage',
        currentbid: '0.6 ETH',
        bid: '(≈ $ 2,400.65)',
        profile: 'assets/img/nft/catalog/avatars/07.png',
        name: 'foxnet_creator',
        status: 'sold'
    },

]


export interface Usuario {
    idUsuario: number;
    nombreUsuario: string;
    ApellidoUsuario: string;
    celularUsuario: Int16Array;
    correoUsuario: string;
    rolUsuario: string;
    // Otros campos del usuario
}

export const USUARIOS: Usuario[] = [
    { idUsuario: 1, nombreUsuario: 'Manuel', ApellidoUsuario: 'Agudelo', celularUsuario: new Int16Array([31231]), correoUsuario: 'manuel@gmail.com', rolUsuario: 'admin' },
    {
        idUsuario: 2,
        nombreUsuario: 'Laura',
        ApellidoUsuario: 'Gómez',
        celularUsuario: new Int16Array([31555]),
        correoUsuario: 'laura@example.com',
        rolUsuario: 'usuario'
    }
    // Agrega más usuarios según sea necesario
];

export { items }