import axios from 'axios';

const instance = axios.create();
const prefix_domain = 'http';
const domain = '';
const client_id = '';
const locale = 'th';
const default_headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};
const display_logs = true;
const display_only_error_logs = false;
instance.defaults.timeout = 10000; /* 10 sec */
export default class API {
    static async get(path, Authorization = null) {
        const headers = {
            ...default_headers,
        };
        if (Authorization) headers.Authorization = Authorization;
        return await instance
            .get(`${prefix_domain}://${domain}/api${path}`, {
                headers,
            })
            .then(res => {
                if (display_logs) {
                    if (display_only_error_logs) {
                        if (res && res.data && res.data.success === false) {
                            console.log(
                                `API res not success "${path}" -->`,
                                (res && res.data) || res,
                            );
                        }
                    } else { }
                }
                return res && res.data;
            })
            .catch(err => {
                console.log(
                    `API err get"${path}" -->`,
                    (err && err.response && err.response.data) || err,
                );
                console.log('err-->', err);
                console.log('err.response-->', err.response);
                console.log('err.response.data-->', err.response.data);
                if (err.response.status == 504) {
                    console.log('504');
                    let obj = { data: [], success: false };
                    return obj;
                }
                return err && err.response && err.response.data;
            });
    }
    static async post(path, data = null, Authorization = null) {
        const headers = {
            ...default_headers,
        };
        if (Authorization) headers.Authorization = Authorization;
        return await instance
            .post(
                `${prefix_domain}://${domain}/api${path}`,
                {
                    ...data,
                },
                {
                    headers,
                },
            )
            .then(res => {
                if (display_logs) {
                    if (display_only_error_logs) {
                        if (res && res.data && res.data.success === false) {
                            console.log(
                                `API res not success "${path}" -->`,
                                (res && res.data) || res,
                            );
                        }
                    } else { }
                }
                return res && res.data;
            })
            .catch(err => {
                console.log(`API err "${path}" -->`, err);
                return err && err.response && err.response.data;
            });
    }
}