export default {
    /**
     * mutations 是 vuex 数据改变的唯一方式  同步方式
     * type 时间类型，理解为方法名
     * @param {*} state 数据状态的定义
     * @param {*} payload 载荷，本质上是一个 json 对象，传递数据的容器
     */
    setMyName: (state, payload) => {
        // console.log('state---', state)
        // console.log('payload---', payload)
        state.myName = payload.newName;
    },

    ////vuex持久化存储
    updateAdd: (state, payload) => {
        state.num++
    },

    setLang(state, payload) {
        state.langColor = payload.newLang
    },

    //存储token
    setToken(state, payload) {
        state.token = payload.token
    },

    //控制页面刷新
    updateRefsh(state, payload) {
        state.refsh = payload.refsh;
    },

    //修改头像
    updateProfilePhoto(state, payload) {
        state.profilePhoto = payload.profilePhoto;
    },

    //token过期重新登陆
    updateTokenInvalidation(state, payload) {
        state.isTokenInvalidation = payload.isTokenInvalidation;
    },

    //修改按钮权限匹配
    updateAuthBtn(state, payload) {
        state.authList = payload;
    },

    //修改header组件的展示
    updateThemeDataStore(state, payload) {
        state.themeDataStore = payload;
    }
}