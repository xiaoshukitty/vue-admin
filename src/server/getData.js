import axios from "./request";
import qs from "qs";


export const testPostRequest = (param) => {
    return axios({
        method: "post",
        url: '接口地址',
        data: qs.stringify(param),
    });
};

export const testGetRequest = (param) => {
    return axios({
        method: 'get',
        url: '接口地址',
        params: param
    })
}