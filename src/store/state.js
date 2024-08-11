export default {
    myName: 'xiaoshu',
    num: 1,
    langColor: 'zh-CN',
    token: sessionStorage.getItem('TOKEN'),
    refsh: false,
    profilePhoto: require('@/assets/images/avatar1.jpg'),
    isTokenInvalidation: false, //token是否过期
    authList: ["btnAuth:btn1"], //权限列表 模拟数据，后期接口获取
}