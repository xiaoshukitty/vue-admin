import instance from "./request";
import qs from "qs";


export const requestPostTest = (url, data) => {
    return instance.post(url, data);
};

export const testGetRequest = (param) => {
    return instance({
        method: 'get',
        url: '接口地址',
        params: param
    })
}