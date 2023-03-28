import instance from "./request";
import qs from "qs";


export const requestPostTest = (url, data) => {
    return instance.post(url, data);
};

export const getJurisdiction = (param) => {
    return instance({
        method: 'get',
        url: 'song',
    })
}