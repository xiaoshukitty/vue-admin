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

// 添加用户
export const addList = (param) => {
    return instance({
        method: 'post',
        url: 'userInfo/add',
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


//备忘录列表
export const getMemoList = (param) => {
    return instance({
        method: 'post',
        url: 'memo/getMemoList',
        data: qs.stringify(param)
    })
}

//添加备忘录
export const addMemoList = (param) => {
    return instance({
        method: 'post',
        url: 'memo/addMemoList',
        data: qs.stringify(param)
    })
}

//更新备忘录
export const updataMemoList = (param) => {
    return instance({
        method: 'post',
        url: 'memo/updataMemoList',
        data: qs.stringify(param)
    })
}

//删除备忘录
export const delMemoList = (param) => {
    return instance({
        method: 'post',
        url: 'memo/delMemoList',
        data: qs.stringify(param)
    })
}

//登录
export const userLogin = (param) => {
    return instance({
        method: 'post',
        url: 'login/userLogin',
        data: qs.stringify(param)
    })
}

//退出登录
export const logout = (param) => {
    return instance({
        method: 'post',
        url: '/login/logout',
        data: qs.stringify(param)
    })
}

// 注册账号
export const signIn = (param) => {
    return instance({
        method: 'post',
        url: '/login/signIn',
        data: qs.stringify(param)
    })
}

// 修改密码
export const updatePassword = (param) => {
    return instance({
        method: 'post',
        url: '/login/updatePassword',
        data: qs.stringify(param)
    })
}

//上传图片
export const updatePic = (param)=>{
    console.log('param---',param);
    return instance({
        method: 'post',
        url: '/pictures/update',
        data: qs.stringify(param)
    })
}

//获取菜品
export const getDishesList = (param)=>{
    return instance({
        method: 'post',
        url: '/dishes/getDishesList',
        data: qs.stringify(param)
    })
}