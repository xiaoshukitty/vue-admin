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
    Refresh: 'Refresh',
    ExitFullScreen: 'Exit Full Screen',
    LogOut: 'Log Out',
    Reminder: 'Reminder',
    ConfirmToExitTheSystem: 'Confirm to exit the system',
    Cancel: 'Cancel',
    Ok: 'Ok',
    HasSuccessfullyExited: 'Has successfully exited',
    LoginSuccessful: 'Login successful',
    ErrorPrompt: 'Error prompt',
    IncorrectAccountOrPassword: 'Incorrect account or password',
    NoTokenProvided: 'No Token Provided',
    TokenAuthenticationFailed: 'Token Authentication Failed',
    GoodMorning: 'Good Morning',
    GoodAfternoon: 'Good Afternoon',
    GoodEvening: 'Good Evening',
    UserName: 'Xiao Shu',
    PasswordError: 'Password Error',
    UsernameError: 'Username Error',
    PleaseCheckRememberMe: "Please Chec kRemember Me",
    PasswordChangedSuccessfully: 'Password Changed Successfully',
    UpdatePassword: 'Update Password',
    Update: 'Update',
    ServerNotLinked: 'Server Not Linked',
    UpdateProfilePhoto: 'Update Profile Photo',
    UploadPictures: "Upload Pictures",
    SelectImage: "Select Image",
    RichText: 'RichText',
    Signature:"Signature",
    Eliminate:"liminate",
    Download:'Download',
    VideoDisplay:'VideoDisplay',
    Share:'Share',
}

const avatarList = [{
    value: 'Log Out'
}, ]

//登陆页面
const loginI18n = {
    LogIn: 'Log In',
    BeLoggingIn: 'Be Logging In',
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
    PleaseEnterTheVerificationCode: 'Please Enter The Verification Code',
    VerificationCodeError: "Verification Code Error"
}

//注册
const signInI18n = {
    SigIn: 'Sig In',
    Username: 'Username',
    PleaseInputUsername: 'Please Input Username',
    Mobile: 'Mobile',
    PleaseInputPhoneNumber: 'Please Input Phone Number',
    SMSCode: 'SMS Code',
    GetSMSCode: 'SMS Code',
    ReacquireIn: 'Reacquire In',
    PleaseInputSMSCode: 'Please Input SMS Code',
    Password: 'Password',
    PleaseInputPassword: 'Please Input Password',
    ConfirmPassword: 'Confirm Password',
    TheTwoPasswordsAreInconsistent: 'The two passwords are inconsistent',
    IAgreeToThexxxPrivacyPolicy: 'I agree to the xxx Privacy Policy',
    BackSigIn: 'Back Sig In',
}

// 手机号登录
const phoneLoginI18n = {
    MobilePhoneNumber: 'MobilePhoneNumber',
    SMSCode: 'SMS Code',
    GetSMSCode: 'Get SMS Code',
    ReacquireIn: 'Reacquire In',
    PleaseInputPhoneNumber: 'Please Input Phone Number',
    PleaseInputSMSCode: 'Please Input SMS Code',
    BackPhoneLogin: 'Back Sig In',
    Login: "Login",
    PhoneLogin: "Phone Login"
}

// 扫码登录
const qrCodeI18m = {
    QrCodeLogin: "Qr Code Login",
    ScanningTheCodeToCompleteTheLogin: 'scanning the code to complete the login',
    BackQrCodeLogin: 'Back Sig In',
}



//导航
const routerNavigation = [{
        name: 'HomePage',
        path: 'module',
        id: '0',
        router: '/children',
        icon: 'el-icon-monitor',
    }, {
        name: 'Module',
        path: 'module',
        id: '1',
        router: '',
        icon: 'el-icon-s-grid',
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
            {
                name: 'richText',
                path: 'richText',
                id: '1-14',
                router: '/richText',
            },


        ]
    }, {
        name: 'Map',
        path: 'map',
        id: '2',
        router: '',
        icon: 'el-icon-map-location',
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
        icon: 'el-icon-notebook-2',
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
        icon: 'el-icon-orange',
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
        icon: 'el-icon-message',
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
    },
    {
        name: 'rests',
        path: 'module',
        id: '7',
        router: '/rests',
        icon: 'el-icon-s-platform',
        children: [{
                name: 'lottery',
                path: 'lottery',
                id: '7-1',
                router: '/lottery',
            },
            {
                name: 'sliderVerification',
                path: 'sliderVerification',
                id: '7-2',
                router: '/sliderVerification',
            },
            {
                name: 'signature',
                path: 'signature',
                id: '7-3',
                router: '/signature',
            },
            {
                name: 'videoDisplay',
                path: 'videoDisplay',
                id: '7-4',
                router: '/videoDisplay',
            }, {
                name: 'share',
                path: 'share',
                id: '7-5',
                router: '/share',
            }
        ]
    }, {

        name: 'setting',
        path: 'setting',
        id: '6',
        icon: 'el-icon-setting',
        router: '/setting',
        children: [{
            name: 'editHeadPortrait',
            path: 'editHeadPortrait',
            id: '6-1',
            router: '/editHeadPortrait',
        }, {
            name: 'updataPassword',
            path: 'updataPassword',
            id: '6-2',
            router: '/updataPassword',
        }]
    }
]

//代码块 
const routerChunkI18n = [{
    name: 'HomePage',
    path: 'module',
    id: '0',
    router: '/children',
    icon: 'el-icon-monitor',
}]

// 标题
const titleI18n ={
    ChinaMap:'China Map',
    LineChart:'Line Chart',
    ColumnDiagram:'Column Diagram',
    Pie:'Pie',
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