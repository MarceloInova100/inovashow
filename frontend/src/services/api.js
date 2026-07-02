import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

export default api;

/*  Android Studio

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

export default api;

*/

/* Celular Físico - ipconfig - IPv4: 192.168.15.10

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.10:3000'
});

export default api;

*/