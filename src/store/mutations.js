export default {
    /**
     * mutations 是 vuex 数据改变的唯一方式  同步方式
     * type 时间类型，理解为方法名
     * @param {*} state 数据状态的定义
     * @param {*} payload 载荷，本质上是一个 json 对象，传递数据的容器
     */
    setMyName: (state, payload) => {
        console.log('state---', state)
        console.log('payload---', payload)
        state.myName = payload.newName;
    }
}