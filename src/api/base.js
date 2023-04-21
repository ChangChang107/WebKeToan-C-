import API from '@/helpers/api';
import axios from 'axios';

const instance = axios.create({
    baseURL: API.BaseUrl.Employee,
    timeout: 10000,
    headers: {'X-Custom-Header':'foobar'}
});

export default instance;