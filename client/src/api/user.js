import http from './http';

export default {
    login (params) {
        return http.post('/api/user/login', params);
    },
    register (params) {
        return http.post('/api/user/register', params);
    }
}