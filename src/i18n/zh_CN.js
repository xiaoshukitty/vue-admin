//头部
const headerList = {
    name: '全屏',
    Refresh: '刷新',
    ExitFullScreen: '退出全屏',
    LogOut: '退出登录',
    Reminder: '温馨提示',
    ConfirmToExitTheSystem: '是否确定退出系统',
    TokenExpired: 'token过期，关闭重新登陆',
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
    Signature: "签名",
    Eliminate: "清除",
    Download: '下载',
    VideoDisplay: '视频播放',
    BtnAuth: "按钮权限",
    Share: '分享',
    SeamlessRolling: '自动滚动',
    LockScreen: '锁屏',
    GlobalSearch: '搜索 ⌘ + K',
    Inform: '通知',
    PleaseEnterTheScreenLockPassword: '请输入锁屏密码',
    LockedScreen: '已锁屏',
    Unlock: "解锁",
    SwitchWallpaper: "切换壁纸",
    TheScreenLockPasswordCannotBeEmpty: "锁屏密码不能为空",
    ScrollText: '文字滚动',
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
    TheVerificationCodeCannotBeEmpty: '验证码不能为空',
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
        path: 'home',
        id: '0',
        router: '/home',
        icon: 'el-icon-monitor',
    }, {
        name: '组件',
        path: 'tips',
        id: '1',
        router: '',
        icon: 'el-icon-s-grid',
        children: [{
                name: '打印',
                path: 'print',
                id: '1-1',
                router: '/tips/print',
                icon: 'el-icon-printer',
            },
            {
                name: '复制',
                path: 'copy',
                id: '1-2',
                router: '/tips/copy',
                icon: 'el-icon-document-copy',
            },
            {
                name: '条形码',
                path: 'barCode',
                id: '1-3',
                router: '/tips/barCode',
                icon: 'el-icon-c-scale-to-original'
            },
            {
                name: '原生拖拽',
                path: 'drag',
                id: '1-4',
                router: '/tips/drag',
                icon: 'el-icon-set-up'
            },
            {
                name: '组件拖拽',
                path: 'vuedraggable',
                id: '1-5',
                router: '/tips/vuedraggable',
                icon: 'el-icon-turn-off'
            },
            {
                name: '拖动排序',
                path: 'dragSort',
                id: '1-6',
                router: '/tips/dragSort',
                icon: 'el-icon-open'
            },
            {
                name: '验证码',
                path: 'verificationCode',
                id: '1-7',
                router: '/tips/verificationCode',
                icon: 'el-icon-message'
            },
            {
                name: 'canvas画图',
                path: 'canvas',
                id: '1-8',
                router: '/tips/canvas',
                icon: 'el-icon-crop'
            },
            {
                name: '图片预览',
                path: 'imgPreview',
                id: '1-9',
                router: '/tips/imgPreview',
                icon: 'el-icon-reading'
            },
            {
                name: 'render函数',
                path: 'render',
                id: '1-10',
                router: '/tips/render',
                icon: 'el-icon-paperclip'
            },
            {
                name: '图表',
                path: 'echarts',
                id: '1-11',
                router: '/tips/echarts',
                icon: 'el-icon-document'
            },
            {
                name: '瀑布流',
                path: 'waterfallFlow',
                id: '1-12',
                router: '/tips/waterfallFlow',
                icon: 'el-icon-takeaway-box'
            },
            {
                name: '树形结构',
                path: 'tree',
                id: '1-13',
                router: '/tips/tree',
                icon: 'el-icon-no-smoking'
            },
            {
                name: '富文本',
                path: 'richText',
                id: '1-14',
                router: '/tips/richText',
                icon: 'el-icon-files'
            },
            {
                name: '虚拟列表(固定高度)',
                path: 'virtual',
                id: '1-15',
                router: '/tips/virtual',
                icon: 'el-icon-notebook-1'
            },
            {
                name: '虚拟列表(不固定高度)',
                path: 'virtualList',
                id: '1-16',
                router: '/tips/virtualList',
                icon: 'el-icon-notebook-2'
            },
            {
                name: '动画',
                path: 'animations',
                id: '1-17',
                router: '/tips/animations',
                icon: 'el-icon-toilet-paper'
            },
            {
                name: '拖动块',
                path: 'dragBlock',
                id: '1-18',
                router: '/tips/dragBlock',
                icon: 'el-icon-office-building'
            },
            {
                name: '文字滚动',
                path: 'scrollText',
                id: '1-19',
                router: '/tips/scrollText',
                icon: 'el-icon-school'
            },
            {
                name: '颗粒页面',
                path: 'particles',
                id: '1-20',
                router: '/tips/particles',
                icon: 'el-icon-more-outline'
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
                router: '/map/elMap',
                icon: 'el-icon-location'
            },
            {
                name: 'QQ地图',
                path: 'qqMap',
                id: '2-2',
                router: '/map/qqMap',
                icon: "el-icon-place"
            },
        ]
    }, {
        name: '图片',
        path: 'picture',
        id: '3',
        icon: 'el-icon-picture',
        children: [{
            name: '图片预览',
            path: 'copywriting',
            id: '3-1',
            router: '/picture/copywriting',
            icon: "el-icon-full-screen"
        }, {
            name: '图片效果',
            path: 'pictureEffect',
            id: '3-2',
            router: '/picture/pictureEffect',
            icon: "el-icon-copy-document"
        }, ]
    }, {
        name: '接口',
        path: 'port',
        id: '4',
        icon: 'el-icon-orange',
        children: [{
                name: '备忘录',
                path: 'memorandum',
                id: '4-1',
                router: '/port/memorandum',
                icon: "el-icon-mic"
            },
            {
                name: '接口测试',
                path: 'requestText',
                id: '4-2',
                router: '/port/requestText',
                icon: "el-icon-trophy"
            },
            {
                name: '图片上传',
                path: 'updatePic',
                id: '4-3',
                router: '/port/updatePic',
                icon: "el-icon-trophy-1"
            },
            {
                name: '聊天-websocket',
                path: 'chatWebSocket',
                id: '4-4',
                router: '/port/chatWebSocket',
                icon: "el-icon-first-aid-kit"
            },
            {
                name: '小程序菜单管理',
                path: 'xcxFoods',
                id: '4-5',
                router: '/port/xcxFoods',
                icon: "el-icon-mobile-phone"
            },
        ]
    }, {
        name: '功能',
        path: 'function',
        id: '5',
        icon: 'el-icon-message',
        children: [{
                name: '自定义指令',
                path: 'customInstruction',
                id: '5-1',
                router: '/function/customInstruction',
                icon: "el-icon-key"
            },
            {
                name: '时间转化',
                path: 'dateConversion',
                id: '5-2',
                router: '/function/dateConversion',
                icon: "el-icon-alarm-clock"
            },
            {
                name: '后台常用模版',
                path: 'tableSearch',
                id: '5-3',
                router: '/function/tableSearch',
                icon: "el-icon-refrigerator"
            },
            {
                name: '常用的',
                path: 'methods',
                id: '5-4',
                router: '/function/methods',
                icon: "el-icon-ice-cream-square"
            },
            {
                name: 'vuex',
                path: 'vuex',
                id: '5-5',
                router: '/function/vuex',
                icon: "el-icon-ice-tea"
            },
            {
                name: 'test',
                path: 'test',
                id: '5-6',
                router: '/function/test',
                icon: "el-icon-ice-drink"
            },
            {
                name: '右键菜单',
                path: 'rightMenu',
                id: '5-7',
                router: '/function/rightMenu',
                icon: "el-icon-s-data"
            },
            {
                name: '按钮权限',
                path: 'btnAuth',
                id: '5-8',
                router: '/function/btnAuth',
                icon: "el-icon-help"
            },
        ]
    },
    {
        name: '内嵌',
        path: 'embedded',
        id: '8',
        router: '/embedded',
        icon: 'el-icon-cpu',
        children: [{
            name: 'vite',
            path: 'viteEmbedded',
            id: '8-1',
            router: '/embedded/viteEmbedded',
            icon: "el-icon-coffee"
        }, ]
    },
    {
        name: '其他',
        path: 'module',
        id: '7',
        router: '/rests',
        icon: 'el-icon-s-platform',
        children: [{
                name: '抽奖',
                path: 'lottery',
                id: '7-1',
                router: '/rests/lottery',
                icon: "el-icon-goblet"
            },
            {
                name: '滑块验证',
                path: 'sliderVerification',
                id: '7-2',
                router: '/rests/sliderVerification',
                icon: "el-icon-goblet-square"
            },
            {
                name: '签名',
                path: 'signature',
                id: '7-3',
                router: '/rests/signature',
                icon: "el-icon-edit"
            },
            {
                name: '视频播放',
                path: 'videoDisplay',
                id: '7-4',
                router: '/rests/videoDisplay',
                icon: "el-icon-video-camera"
            }, {
                name: '分享',
                path: 'share',
                id: '7-5',
                router: '/rests/share',
                icon: "el-icon-sell"
            },
            // {
            //     name: '无缝滚动',
            //     path: 'seamlessRolling',
            //     id: '7-6',
            //     router: '/rests/seamlessRolling',
            // }, 
            {
                name: '记事本',
                path: 'notepad',
                id: '7-7',
                router: '/rests/notepad',
                icon: "el-icon-date"
            }, {
                name: '引导页',
                path: 'introductionPage',
                id: '7-8',
                router: '/rests/introductionPage',
                icon: 'el-icon-view'
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
            router: '/setting/editHeadPortrait',
            icon: 'el-icon-coordinate'
        }, {
            name: '修改密码',
            path: 'updataPassword',
            id: '6-2',
            router: '/setting/updataPassword',
            icon: 'el-icon-lock'
        }]
    },
]

//代码块 
const routerChunkI18n = [{
    name: '首页',
    path: 'home',
    id: '0',
    router: '/home',
    icon: 'el-icon-monitor',
}]

// 标题
const titleI18n = {
    ChinaMap: '中国地图',
    LineChart: '折线图',
    ColumnDiagram: '柱形图',
    Pie: '饼图',
}

//引导
const guide = {
    Guide: '引导页',
    Welcome: '欢迎',
    GoToTheBootPage: '进入引导页 👋',
    Menu: '菜单',
    QuickMenuSwitch: '快速菜单切换 👋',
    GlobalSearch: '全局搜索 👋',
    GlobalSearchCommandK: 'Command + K 可全局搜索 👋',
    LockScreen: '锁屏',
    TapTheLockScreenWhenYouLeave: '离开时可以点击锁屏 👋',
    Refresh: '刷新',
    RefreshIntroduce: '如果长时间不操作，可以刷新页面 👋', //If you do not perform operations for a long time, you can refresh the page
    Notification: '通知',
    NotificationIntroduce: '可以查看新的信息 👋', //You can view new information
    Language: '语言',
    LanguageIntroduce: '语言切换 👋', //Language switching
    FullScreen: "全屏",
    FullScreenIntroduce: '全屏显示页面 👋', //The page is displayed in full screen
    Minification: "缩小",
    MinificationIntroduce: '收缩路由菜单栏 👋', //Shrink the route menu bar
    RouteMenu: '路由菜单',
    RouteMenuIntroduce: '路由菜单切换跳转 👋' //Route menu switch skip
}


export {
    headerList,
    loginI18n,
    avatarList,
    routerNavigation,
    signInI18n,
    phoneLoginI18n,
    qrCodeI18m,
    routerChunkI18n,
    titleI18n,
    guide
}