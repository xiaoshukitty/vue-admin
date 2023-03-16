import axios from "axios";

//获取token
// const getToken = () => {
//     let token = sessionStorage.getItem('token');
//     return token
// }

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// instance.defaults.headers.common['Authorization'] = '自己的token';

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 让每一个接口都带 token
        // const token = store.state.token;
        // token && (config.headers.Authorization = token); //方法一

        // if (token !== null) {
        //     config.headers['token'] = store.state.token; //方法二
        // } else { 
        // }

        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
//response 响应拦截器拦截器
instance.interceptors.response.use(
    response => {
        if (response.data === "") {
            return Promise.resolve(response);
        }
        if (response.data.hasOwnProperty("code")) {
            if (response.data.code != 0) { //判断接口状态码
                Message({
                    message: response.data.msg,
                    type: "error",
                    duration: 3000,
                });
                return Promise.reject(response.data.msg);
            } else {
                // 跳转页面
                // vue.$router.push('/xxx')
                return Promise.resolve(response);
            }
        }
    },
    error => {
        //处理错误逻辑
        return Promise.reject(error);
    }
);
export default instance;