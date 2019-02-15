import axios from 'axios';
import { phones } from '../constants/urls';

export const getPhonesFromApi = () => {
    return axios.get(phones);
};