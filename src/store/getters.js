export default {
    getMyName: (state) => {
        return state.myName;
    },
    getLangColor: (state) => {
        return state.langColor;
    },
    //页面刷新
    getRefsh: (state) => {
        return state.refsh
    },
    //获取头像
    getProfilePhoto: (state) => {
        return state.profilePhoto
    },

    //获取token是否过期
    getTokenInvalidation:(state)=>{
        return state.isTokenInvalidation
    },

    //获取header主题配置
    getThemeDataStore:(state)=>{
        return state.themeDataStore
    }
}