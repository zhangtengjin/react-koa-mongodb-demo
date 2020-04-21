import 'whatwg-fetch';

class Http {
    get(url, params) { // GET请求
        const newUrl = params ? this.build(url, params) : url
        return this.request(newUrl, {
            method: 'GET',
        })
    }

    post(url, body) { // POST请求
        let options = { 
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        if (body) options.body = JSON.stringify(body)
        return this.request(url, options)
    }

    postAsFormData(url, params) {
        let options = { method: 'POST' }
        if (params) options.body = this.buildFormData(params)
        return this.request(url, options)
    }

    postForm(url, form) {
        let options = { method: 'POST' }
        if (form) options.body = new FormData(form)
        return this.request(url, options)
    }

    request(url, options) {
        // options.credentials = 'same-origin'
        return fetch(url, options)
        .then((response) => {
            return response.json()
        })
        .catch( (err) => { 
            return err //错误信息返回
        })
    }

    defaultHeader() { // 默认头
        const header = {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        };
        return header
    }

    build(url, params) { // URL构建方法
        const ps = []
        if (params) {
            for (let p in params) {
                if (p) {
                    ps.push(p + '=' + encodeURIComponent(params[p]));
                }
            }
        }
        return url + '?' + ps.join('&')
    }

    buildFormData(params) {
        if (params) {
            const data = new FormData()
            for (let p in params) {
                if (p) {
                    data.append(p, params[p])
                }
            }
            return data;
        }
    }
}
export default new Http();

