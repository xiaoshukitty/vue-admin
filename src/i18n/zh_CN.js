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
    name: '全屏',
    Refresh: '刷新',
    ExitFullScreen: '退出全屏',
    LogOut: '退出登录',
    Reminder: '温馨提示',
    ConfirmToExitTheSystem: '是否确定退出系统',
    Cancel: '取消',
    Ok: '确定',
    HasSuccessfullyExited: '已成功退出了',
    LoginSuccessful: '登录成功',
    ErrorPrompt: '错误提示',
    IncorrectAccountOrPassword: '帐号或密码不正确',
    NoTokenProvided: '未提供token',
    TokenAuthenticationFailed: 'token验证失败',
    GoodMorning: '上午好',
    GoodAfternoon: '下午好',
    GoodEvening: '晚上好',
    UserName: '小小舒',
    PasswordError: '密码错误',
    UsernameError: '账号错误',
    PleaseCheckRememberMe: '请勾选记住我',
    PasswordChangedSuccessfully: '密码修改成功',
    UpdatePassword: '修改密码',
    Update: '修改',
    ServerNotLinked: '服务器未链接',
    UpdateProfilePhoto: '修改头像',
    UploadPictures: "上传",
    SelectImage: "选择",
    RichText: '富文本',
    Signature:"签名",
    Eliminate:"清除",
    Download:'下载',
    VideoDisplay:'视频播放',
    Share:'分享',

}


const avatarList = [{
    value: '退出登录'
}, ]

//登陆页面
const loginI18n = {
    LogIn: '登录',
    BeLoggingIn: '登录中',
    SingIn: '注册',
    UserName: '账号',
    PassWord: "密码",
    RememberMe: '记住我',
    ForgetPasswodr: '忘记密码',
    MobileSignIn: '手机登录',
    QrCodeSignIn: '扫码登录',
    SignInWith: '其他方式登录',
    PleaseInputUsername: '请输入账号',
    PleaseInputPassword: '请输入密码',
    PleaseEnterTheVerificationCode: '请输入验证码',
    VerificationCodeError: "验证码错误",
}

//注册
const signInI18n = {
    SigIn: '注册',
    Username: '账号',
    PleaseInputUsername: '请输入账号',
    Mobile: '手机号',
    PleaseInputPhoneNumber: '请输入手机号',
    SMSCode: '短信验证码',
    GetSMSCode: '获取验证码',
    ReacquireIn: '后重新获取',
    PleaseInputSMSCode: '请输入短信验证码',
    Password: '密码',
    PleaseInputPassword: '请输入密码',
    ConfirmPassword: '确认密码',
    TheTwoPasswordsAreInconsistent: '两次输入密码不一致',
    IAgreeToThexxxPrivacyPolicy: '我同意xxx隐私政策',
    BackSigIn: '返回',
}

// 手机号登录
const phoneLoginI18n = {
    MobilePhoneNumber: '手机号码',
    SMSCode: '短信验证码',
    GetSMSCode: '获取验证码',
    ReacquireIn: '后重新获取',
    PleaseInputPhoneNumber: '请输入手机号码',
    PleaseInputSMSCode: '请输入短信验证码',
    BackPhoneLogin: '返回',
    Login: "登录",
    PhoneLogin: "手机登录"
}

// 扫码登录
const qrCodeI18m = {
    QrCodeLogin: "二维码登录",
    ScanningTheCodeToCompleteTheLogin: '扫码后点击"确认"，即可完成登录',
    BackQrCodeLogin: '返回',
}

//导航
const routerNavigation = [{
    name: '首页',
    path: 'module',
    id: '0',
    router: '/children',
    icon: 'el-icon-monitor',
}, {
    name: '组件',
    path: 'module',
    id: '1',
    router: '',
    icon: 'el-icon-s-grid',
    children: [{
            name: '打印',
            path: 'print',
            id: '1-1',
            router: '/print'
        },
        {
            name: '复制',
            path: 'copy',
            id: '1-2',
            router: '/copy',
        },
        {
            name: '条形码',
            path: 'barCode',
            id: '1-3',
            router: '/barCode',
        },
        {
            name: '原生拖拽',
            path: 'drag',
            id: '1-4',
            router: '/drag',
        },
        {
            name: '组件拖拽',
            path: 'vuedraggable',
            id: '1-5',
            router: '/vuedraggable',
        },
        {
            name: '拖动排序',
            path: 'dragSort',
            id: '1-6',
            router: '/dragSort',
        },
        {
            name: '验证码',
            path: 'verificationCode',
            id: '1-7',
            router: '/verificationCode',
        },
        {
            name: 'canvas画图',
            path: 'canvas',
            id: '1-8',
            router: '/canvas',
        },
        {
            name: '图片预览',
            path: 'imgPreview',
            id: '1-9',
            router: '/imgPreview',
        },
        {
            name: 'render函数',
            path: 'render',
            id: '1-10',
            router: '/render',
        },
        {
            name: '图表',
            path: 'echarts',
            id: '1-11',
            router: '/echarts',
        },
        {
            name: '瀑布流',
            path: 'waterfallFlow',
            id: '1-12',
            router: '/waterfallFlow',
        },
        {
            name: '树形结构',
            path: 'tree',
            id: '1-13',
            router: '/tree',
        },
        {
            name: '富文本',
            path: 'richText',
            id: '1-14',
            router: '/richText',
        },

    ]
}, {
    name: '地图',
    path: 'map',
    id: '2',
    router: '',
    icon: 'el-icon-map-location',
    children: [{
            name: '高德地图',
            path: 'elMap',
            id: '2-1',
            router: '/elMap',
        },
        {
            name: 'QQ地图',
            path: 'qqMap',
            id: '2-2',
            router: '/qqMap',
        },
    ]
}, {
    name: '列表',
    path: 'list',
    id: '3',
    router: '',
    icon: 'el-icon-notebook-2',
    children: [{
            name: '虚拟列表(固定高度)',
            path: 'virtual',
            id: '3-1',
            router: '/virtual',
        },
        {
            name: '虚拟列表(不固定高度)',
            path: 'virtualList',
            id: '3-2',
            router: '/virtualList',
        },
    ]
}, {
    name: '接口',
    path: 'api',
    id: '4',
    icon: 'el-icon-orange',
    children: [{
            name: '备忘录',
            path: 'memorandum',
            id: '4-1',
            router: '/memorandum',
        },
        {
            name: '接口测试',
            path: 'requestText',
            id: '4-2',
            router: '/requestText',
        },
    ]
}, {
    name: '功能',
    path: 'feature',
    id: '5',
    icon: 'el-icon-message',
    children: [{
            name: '自定义指令',
            path: 'customInstruction',
            id: '5-1',
            router: '/customInstruction',
        },
        {
            name: '时间转化',
            path: 'dateConversion',
            id: '5-2',
            router: '/dateConversion',
        },
        {
            name: '后台常用模版',
            path: 'tableSearch',
            id: '5-3',
            router: '/tableSearch',
        },
        {
            name: '常用的',
            path: 'methods',
            id: '5-4',
            router: '/methods',
        },
        {
            name: 'vuex',
            path: 'vuex',
            id: '5-5',
            router: '/vuex',
        },
    ]
}, {
    name: '其他',
    path: 'module',
    id: '7',
    router: '/rests',
    icon: 'el-icon-s-platform',
    children: [{
            name: '抽奖',
            path: 'lottery',
            id: '7-1',
            router: '/lottery',
        },
        {
            name: '滑块验证',
            path: 'sliderVerification',
            id: '7-2',
            router: '/sliderVerification',
        },
        {
            name: '签名',
            path: 'signature',
            id: '7-3',
            router: '/signature',
        },
        {
            name: '视频播放',
            path: 'videoDisplay',
            id: '7-4',
            router: '/videoDisplay',
        }, {
            name: '分享',
            path: 'share',
            id: '7-5',
            router: '/share',
        }
    ]
}, {

    name: '设置',
    path: 'setting',
    id: '6',
    icon: 'el-icon-setting',
    router: '/setting',
    children: [{
        name: '修改头像',
        path: 'editHeadPortrait',
        id: '6-1',
        router: '/editHeadPortrait',
    }, {
        name: '修改密码',
        path: 'updataPassword',
        id: '6-2',
        router: '/updataPassword',
    }]
}, ]

//代码块 
const routerChunkI18n = [{
    name: '首页',
    path: 'module',
    id: '0',
    router: '/children',
    icon: 'el-icon-monitor',
}]

// 标题
const titleI18n ={
    ChinaMap:'中国地图',
    LineChart:'折线图',
    ColumnDiagram:'柱形图',
    Pie:'饼图',
}

export {
    operationList,
    headerList,
    loginI18n,
    avatarList,
    routerNavigation,
    signInI18n,
    phoneLoginI18n,
    qrCodeI18m,
    routerChunkI18n,
    titleI18n
}