import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-8546e/us-central1/api' // Api (cloud) url
});

export default instance;