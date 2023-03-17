export function checkArray(key) {
    //模拟权限数组
    let arr = ['1', '3', '5']
    let index = arr.indexOf(key)
    if (index > -1) {
        return true
    } else {
        return false
    }
}