//首页加导航
const operationList = [{
        name: 'verificationCode',
        path: 'verificationCode'
    },
    {
        name: 'elMap',
        path: 'elMap'
    },
    {
        name: 'qqMap',
        path: 'qqMap'
    },
    {
        name: 'autoNaviMap',
        path: 'autoNaviMap'
    },
    {
        name: 'drag',
        path: 'drag'
    },
    {
        name: 'vuedraggable',
        path: 'vuedraggable'
    },
    {
        name: 'dragSort',
        path: 'dragSort'
    },
    {
        name: 'tree',
        path: 'tree'
    },
    {
        name: 'virtual',
        path: 'virtual'
    },
    {
        name: 'virtualList',
        path: 'virtualList'
    },
    {
        name: 'canvas',
        path: 'canvas'
    },
    {
        name: 'imgPreview',
        path: 'imgPreview'
    },
    {
        name: 'print',
        path: 'print'
    },
    {
        name: 'copy',
        path: 'copy'
    },
    {
        name: 'barCode',
        path: 'barCode'
    },
    {
        name: 'vuex',
        path: 'vuex'
    },
    {
        name: 'tableSearch',
        path: 'tableSearch'
    },
    {
        name: 'methods',
        path: 'methods'
    },
    {
        name: 'dateConversion',
        path: 'dateConversion'
    },
    {
        name: 'requestText',
        path: 'requestText'
    },
    {
        name: 'memorandum',
        path: 'memorandum'
    },
    {
        name: 'render',
        path: 'render'
    },
    {
        name: 'customInstruction',
        path: 'customInstruction'
    },
    {
        name: 'waterfallFlow',
        path: 'waterfallFlow'
    },
    {
        name: 'echarts',
        path: 'echarts',
    },
    {
        name: 'test',
        path: 'test'
    },
]

//头部
const headerList = {
    name: 'Full Screen',
    LogOut: 'Log Out',
    Reminder: 'Reminder',
    ConfirmToExitTheSystem: 'Confirm to exit the system',
    Cancel: 'Cancel',
    Ok: 'Ok',
    HasSuccessfullyExited: 'Has successfully exited',
    LoginSuccessful: 'Login successful',
    ErrorPrompt: 'Error prompt',
    IncorrectAccountOrPassword: 'Incorrect account or password',
}

const avatarList = [{
    value: 'Log Out'
}, ]

//登陆页面
const loginI18n = {
    LogIn: 'Log In',
    SingIn: 'Sing In',
    UserName: 'UserName',
    PassWord: "PassWord",
    RememberMe: 'Remember Me',
    ForgetPasswodr: 'Forget Passwodr',
    MobileSignIn: 'Mobile sign in',
    QrCodeSignIn: 'Qr Code sign in',
    SignInWith: 'Sign in with',
    PleaseInputUsername: 'Please input username',
    PleaseInputPassword: 'Please input password',
}

//导航
const routerNavigation = [{
    name: 'HomePage',
    path: 'module',
    id: '0',
    router: '/children',
}, {
    name: 'Module',
    path: 'module',
    id: '1',
    router: '',
    children: [{
            name: 'Print',
            path: 'print',
            id: '1-1',
            router: '/print'
        },
        {
            name: 'Copy',
            path: 'copy',
            id: '1-2',
            router: '/copy',
        },
        {
            name: 'BarCode',
            path: 'barCode',
            id: '1-3',
            router: '/barCode',
        },
        {
            name: 'Drag',
            path: 'drag',
            id: '1-4',
            router: '/drag',
        },
        {
            name: 'Vuedraggable',
            path: 'vuedraggable',
            id: '1-5',
            router: '/vuedraggable',
        },
        {
            name: 'DragSort',
            path: 'dragSort',
            id: '1-6',
            router: '/dragSort',
        },
        {
            name: 'Verification Code',
            path: 'verificationCode',
            id: '1-7',
            router: '/verificationCode',
        },
        {
            name: 'Canvas',
            path: 'canvas',
            id: '1-8',
            router: '/canvas',
        },
        {
            name: 'Img Preview',
            path: 'imgPreview',
            id: '1-9',
            router: '/imgPreview',
        },
        {
            name: 'Render',
            path: 'render',
            id: '1-10',
            router: '/render',
        },
        {
            name: 'Echarts',
            path: 'echarts',
            id: '1-11',
            router: '/echarts',
        },
        {
            name: 'Waterfall Flow',
            path: 'waterfallFlow',
            id: '1-12',
            router: '/waterfallFlow',
        },
        {
            name: 'Tree',
            path: 'tree',
            id: '1-13',
            router: '/tree',
        },

    ]
}, {
    name: 'Map',
    path: 'map',
    id: '2',
    router: '',
    children: [{
            name: 'El Map',
            path: 'elMap',
            id: '2-1',
            router: '/elMap',
        },
        {
            name: 'QQ Map',
            path: 'qqMap',
            id: '2-2',
            router: '/qqMap',
        },
    ]
}, {
    name: 'List',
    path: 'list',
    id: '3',
    router: '',
    children: [{
            name: 'Virtual',
            path: 'virtual',
            id: '3-1',
            router: '/virtual',
        },
        {
            name: 'Virtual List',
            path: 'virtualList',
            id: '3-2',
            router: '/virtualList',
        },
    ]
}, {
    name: 'Api',
    path: 'api',
    id: '4',
    children: [{
            name: 'Memorandum',
            path: 'memorandum',
            id: '4-1',
            router: '/memorandum',
        },
        {
            name: 'Request Text',
            path: 'requestText',
            id: '4-2',
            router: '/requestText',
        },
    ]
}, {
    name: 'Feature',
    path: 'feature',
    id: '5',
    children: [{
            name: 'Custom Instruction',
            path: 'customInstruction',
            id: '5-1',
            router: '/customInstruction',
        },
        {
            name: 'Date Conversion',
            path: 'dateConversion',
            id: '5-2',
            router: '/dateConversion',
        },
        {
            name: 'Table Search',
            path: 'tableSearch',
            id: '5-3',
            router: '/tableSearch',
        },
        {
            name: 'Methods',
            path: 'methods',
            id: '5-4',
            router: '/methods',
        },
        {
            name: 'Vuex',
            path: 'vuex',
            id: '5-5',
            router: '/vuex',
        },



    ]
}]

export {
    operationList,
    headerList,
    loginI18n,
    avatarList,
    routerNavigation
}