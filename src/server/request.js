import axios from "axios";

// 添加请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        if (store.state.token !== null) {
            if (config.method == "post") {
                console.log('post')
            } else if (config.method == "get") {
                console.log('get')
            }
        } else {
            if (config.method == "post") {
                console.log('post')
            } else if (config.method == "get") {
                console.log('get')
            }
        }
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
//response 响应拦截器拦截器
axios.interceptors.response.use(
    (response) => {
        if (response.data === "") {
            return Promise.resolve(response);
        }
        if (response.data.hasOwnProperty("code")) {
            if (response.data.code != 0) {
                Message({
                    message: response.data.msg,
                    type: "error",
                    duration: 3000,
                });
                return Promise.reject(response.data.msg);
            } else {
                return Promise.resolve(response);
            }
        }
    },
    (error) => {
        //处理错误逻辑
        return Promise.reject(error);
    }
);
export default axios;