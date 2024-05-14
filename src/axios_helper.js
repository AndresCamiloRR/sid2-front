import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9091';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};