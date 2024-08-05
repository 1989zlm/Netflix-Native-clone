import axios from 'axios';
import { apiKey, token } from '../constants';

const baseURL = 'https://api.themoviedb.org/3';

export const axiosAgent = axios.create({
    baseURL,
    params: {
        api_key: apiKey,
        language: 'tr-TR',
    },
    headers: {
        accept: 'application/json',
        // Authorization: 'Bearer 6ae7237f278c2671406728769a720d7a' böyleydi
        Authorization: `Bearer ${token}`,
    }
})