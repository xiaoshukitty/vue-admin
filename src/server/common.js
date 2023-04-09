import instance from "./request";
import qs from "qs";


export const requestPostTest = (url, data) => {
    return instance.post(url, data);
};

// 用户列表
export const userList = (param) => {
    return instance({
        method: 'post',
        url: 'userInfo/userList',
        data: qs.stringify(param)
    })
}

// 更新用户数据
export const updataUserInfo = (param) => {
    return instance({
        method: 'post',
        url: 'userInfo/updataUserInfo',
        data: qs.stringify(param)
    })
}

// 删除用户数据
export const deleteUserInfo = (param) => {
    return instance({
        method: 'post',
        url: 'userInfo/deleteUserInfo',
        data: qs.stringify(param)
    })
}


export const getMemoList = (param) => {
    return instance({
        method: 'post',
        url: 'memo/getMemoList',
        data: qs.stringify(param)
    })
}
