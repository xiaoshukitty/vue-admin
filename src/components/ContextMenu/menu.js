/**
 * 根据传人进来的 routerType 返回对应的数组
 * @param {String} routerType 
 * @returns 
 */
export const fieldsListEnum = (routerType) => {
    const getFields = (routerType) => {
        let fieldsList = new Map([
            ['layout', routerEnum],
            ['rightMenu', menuEnum]
        ])
        return fieldsList.get(routerType) || fieldsList.get('default')
    }
    return getFields(routerType);
}

// 路由导航右键菜单
const routerEnum = [{
    name: '全部关闭',
    icon: "el-icon-close",
    lable: "close"
}]

// 菜单栏右键菜单
const menuEnum = [{
    name: '添加',
    icon: "el-icon-plus",
     lable: "add"
}, {
    name: '打开',
    icon: "el-icon-s-finance",
     lable: "open"
}]