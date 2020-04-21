import http from './http';

export default {
    login (params) {
        return http.post('/user/login', params);
    },
    register (params) {
        return http.post('/user/register', params);
    }
}