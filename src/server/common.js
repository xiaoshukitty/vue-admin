import instance from "./request";
import qs from "qs";


export const requestPostTest = (url, data) => {
    return instance.post(url, data);
};

export const getJurisdiction = (param) => {
    return instance({
        method: 'get',
        url: 'getInfo',
    })
}
export const searchList = (param) => {
    return instance({
        method: 'post',
        url: 'search',
        data: qs.stringify(param)
    })
}

export const addList = (param) => {
    return instance({
        method: 'post',
        url: 'add',
        data: qs.stringify(param)
    })
}