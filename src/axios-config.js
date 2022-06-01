import axios from 'axios';
import { specifications } from './utilities/specifications';

const instance = axios.create({
    baseURL: specifications.BaseURL,
});

export default instance;