//首页加导航
const operationList = [{
        name: '验证码',
        path: 'verificationCode'
    },
    {
        name: '地图',
        path: 'elMap'
    },
    {
        name: 'QQ地图',
        path: 'qqMap'
    },
    {
        name: '高德地图',
        path: 'autoNaviMap'
    },
    {
        name: '原生拖拽',
        path: 'drag'
    },
    {
        name: 'vuedraggable拖拽',
        path: 'vuedraggable'
    },
    {
        name: '拖动排序',
        path: 'dragSort'
    },
    {
        name: '树形',
        path: 'tree'
    },
    {
        name: '虚拟列表(固定高度)',
        path: 'virtual'
    },
    {
        name: '虚拟列表(不固定高度)',
        path: 'virtualList'
    },
    {
        name: 'canvas绘图,生成二维码海报',
        path: 'canvas'
    },
    {
        name: '图片预览(js)',
        path: 'imgPreview'
    },
    {
        name: '打印',
        path: 'print'
    },
    {
        name: '复制',
        path: 'copy'
    },
    {
        name: '条形码',
        path: 'barCode'
    },
    {
        name: 'vuex',
        path: 'vuex'
    },
    {
        name: '常用表格-copy',
        path: 'tableSearch'
    },
    {
        name: '常用的',
        path: 'methods'
    },
    {
        name: '时间转化',
        path: 'dateConversion'
    },
    {
        name: '接口测试',
        path: 'requestText'
    },
    {
        name: '备忘录',
        path: 'memorandum'
    },
    {
        name: 'render函数测试',
        path: 'render'
    },
    {
        name: '自定义指令',
        path: 'customInstruction'
    },
    {
        name: '瀑布流',
        path: 'waterfallFlow'
    },
    {
        name: '图表',
        path: 'echarts'
    },
    {
        name: 'test',
        path: 'test'
    },
]

//头部
const headerList = {
    name: '全屏'
}

//登陆页面
const loginI18n = {
    LogIn: '登录',
    SingIn: '注册',
    UserName: '账号',
    PassWord: "密码",
    RememberMe: '记住我',
    ForgetPasswodr: '忘记密码',
    MobileSignIn: '手机登录',
    QrCodeSignIn: '扫码登录',
    SignInWith: '其他方式登录',
    PleaseInputUsername:'请输入账号',
    PleaseInputPassword:'请输入密码',
}

export {
    operationList,
    headerList,
    loginI18n
}