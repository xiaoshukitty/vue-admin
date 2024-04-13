import axios from "axios";
import store from '@/store/index'
import {
    analyzeArgument
} from '@/utils/index'
import {
    startTime
} from '@/utils/time'

const instance = axios.create({
    baseURL: ' http://localhost:3000/',
    timeout: 1000,
    retry: 2, // 设置重新请求次数
    retryDelay: 1000, // 设置请求延时
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
});


// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// instance.defaults.headers.common['Authorization'] = '自己的token';

/**
 * token 过期处理
 */

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        console.log('4')
        // 在发送请求之前做些什么
        // 让每一个接口都带 token
        const result = store.state;
        console.log('1');
        if (result && result.token) {
            console.log('2');
            config.headers.Authorization = `Bearer ${result.token}`;
            const endTime = JSON.parse(sessionStorage.getItem('TOKENINFO'));

            if (endTime.exp < startTime()) {
                //token 过期就存入 vuex 然后 layout 页面监听 token 是否过期，在做其他操作
                store.commit('updateTokenInvalidation', {
                    isTokenInvalidation: true
                })
            }
        }
        let isToken = analyzeArgument(config.data).hasOwnProperty('token');
        if (!isToken) {
            config.data += "&token=" + result.token;
        }
        console.log('3');

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
            if (response.data.code != 200) { //判断接口状态码
                // this.$message.error({
                //     message: response.data.message,
                //     type: "error",
                //     duration: 3000,
                // })
                // return Promise.reject(response.data.message);
                return Promise.resolve(response.data)
            } else if (response.data.code == 200) {
                return Promise.resolve(response.data)
            } else {
                // 跳转页面
                // vue.$router.push('/xxx')
                return Promise.resolve(response);
            }
        }
        // 测试本地接口调试,有真实接口则注射掉
        return Promise.resolve(response.data)
    },
    error => {
        let config = error.config;
        // 如果配置不存在或未设置重试选项，则返回错误信息
        if (!config || !config.retry) return Promise.reject(error);
        // 设置变量即跟踪重试次数
        config.retryCount = config.retryCount || 1;
        console.log('config', config);
        console.log('retryCount', config.retryCount);
        // 检查我们是否已经超过了总重试次数
        if (config.retryCount > config.retry) {
            console.log('error----', error.message);
            // 返回错误信息
            // 可做借口请求失败页面跳转
            // return Promise.reject(error);
            return error;
        }
        // 重试次数加1
        config.retryCount++;
        // 创建延时器等待发送重试请求
        var backoff = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, config.retryDelay || 1)
        });
        // 返回调用axios来重试请求
        return backoff.then(() => {
            return request(config);
        })
    }
);
const request = (config) => {
    return instance(config)
}
export default instance;