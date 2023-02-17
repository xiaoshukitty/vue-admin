export default {
    /**
     * 
     * acitons：是异步数据更改,本质上还是 mytations 来改变数据 
     * @param {*} context 上下文
     * @param {*} payload 载荷，本质上是一个 json 对象，传递数据的容器
     */
    setAsyncMyNameStatic: (context, payload) => {
        setTimeout(() => {
            context.commit('setMyName', payload)
        }, 3000)
    }

}