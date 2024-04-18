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
    TokenExpired:"If the token expires, close and log in again",
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
    Signature: "Signature",
    Eliminate: "liminate",
    Download: 'Download',
    VideoDisplay: 'VideoDisplay',
    Share: 'Share',
    SeamlessRolling: 'Seamless Rolling',
    GlobalSearch:'GlobalSearch ⌘ + K',
    LockScreen: 'Lock Screen',
    Inform: "Inform",
    PleaseEnterTheScreenLockPassword: 'Please Enter The Screen Lock Password',
    LockedScreen: 'Locked Screen',
    Unlock: "Unlock",
    SwitchWallpaper: "Switch Wallpaper",
    TheScreenLockPasswordCannotBeEmpty: "The Screen Lock Password Cannot Be Empty",
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
    VerificationCodeError: "Verification Code Error",
    TheVerificationCodeCannotBeEmpty: 'The Verification Code Cannot Be Empty'
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
        router: '/home',
        icon: 'el-icon-monitor',
    }, {
        name: 'tips',
        path: 'tips',
        id: '1',
        router: '',
        icon: 'el-icon-s-grid',
        children: [{
                name: 'Print',
                path: 'print',
                id: '1-1',
                router: '/tips/print'
            },
            {
                name: 'Copy',
                path: 'copy',
                id: '1-2',
                router: '/tips/copy',
            },
            {
                name: 'BarCode',
                path: 'barCode',
                id: '1-3',
                router: '/tips/barCode',
            },
            {
                name: 'Drag',
                path: 'drag',
                id: '1-4',
                router: '/tips/drag',
            },
            {
                name: 'Vuedraggable',
                path: 'vuedraggable',
                id: '1-5',
                router: '/tips/vuedraggable',
            },
            {
                name: 'DragSort',
                path: 'dragSort',
                id: '1-6',
                router: '/tips/dragSort',
            },
            {
                name: 'Verification Code',
                path: 'verificationCode',
                id: '1-7',
                router: '/tips/verificationCode',
            },
            {
                name: 'Canvas',
                path: 'canvas',
                id: '1-8',
                router: '/tips/canvas',
            },
            {
                name: 'ImgPreview',
                path: 'imgPreview',
                id: '1-9',
                router: '/tips/imgPreview',
            },
            {
                name: 'Render',
                path: 'render',
                id: '1-10',
                router: '/tips/render',
            },
            {
                name: 'Echarts',
                path: 'echarts',
                id: '1-11',
                router: '/tips/echarts',
            },
            {
                name: 'Waterfall Flow',
                path: 'waterfallFlow',
                id: '1-12',
                router: '/tips/waterfallFlow',
            },
            {
                name: 'Tree',
                path: 'tree',
                id: '1-13',
                router: '/tips/tree',
            },
            {
                name: 'richText',
                path: 'richText',
                id: '1-14',
                router: '/tips/richText',
            },
            {
                name: 'virtual',
                path: 'virtual',
                id: '1-15',
                router: '/tips/virtual',
            },
            {
                name: 'virtualList',
                path: 'virtualList',
                id: '1-16',
                router: '/tips/virtualList',
            },
            {
                name: 'animations',
                path: 'animations',
                id: '1-17',
                router: '/tips/animations',
            },
            {
                name: 'dragBlock',
                path: 'dragBlock',
                id: '1-18',
                router: '/tips/dragBlock',
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
                router: '/map/elMap',
            },
            {
                name: 'QQ Map',
                path: 'qqMap',
                id: '2-2',
                router: '/map/qqMap',
            },
        ]
    }, {
        name: 'port',
        path: 'port',
        id: '4',
        icon: 'el-icon-orange',
        children: [{
                name: 'Memorandum',
                path: 'memorandum',
                id: '4-1',
                router: '/port/memorandum',
            },
            {
                name: 'Request Text',
                path: 'requestText',
                id: '4-2',
                router: '/port/requestText',
            },
            {
                name: 'updatePic',
                path: 'updatePic',
                id: '4-3',
                router: '/port/updatePic',
            },
        ]
    }, {
        name: 'function',
        path: 'function',
        id: '5',
        icon: 'el-icon-message',
        children: [{
                name: 'Custom Instruction',
                path: 'customInstruction',
                id: '5-1',
                router: '/function/customInstruction',
            },
            {
                name: 'Date Conversion',
                path: 'dateConversion',
                id: '5-2',
                router: '/function/dateConversion',
            },
            {
                name: 'Table Search',
                path: 'tableSearch',
                id: '5-3',
                router: '/function/tableSearch',
            },
            {
                name: 'Methods',
                path: 'methods',
                id: '5-4',
                router: '/function/methods',
            },
            {
                name: 'Vuex',
                path: 'vuex',
                id: '5-5',
                router: '/function/vuex',
            },
            {
                name: 'test',
                path: 'test',
                id: '5-6',
                router: '/function/test',
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
                router: '/rests/lottery',
            },
            {
                name: 'sliderVerification',
                path: 'sliderVerification',
                id: '7-2',
                router: '/rests/sliderVerification',
            },
            {
                name: 'signature',
                path: 'signature',
                id: '7-3',
                router: '/rests/signature',
            },
            {
                name: 'videoDisplay',
                path: 'videoDisplay',
                id: '7-4',
                router: '/rests/videoDisplay',
            }, {
                name: 'share',
                path: 'share',
                id: '7-5',
                router: '/rests/share',
            }, {
                name: 'seamlessRolling',
                path: 'seamlessRolling',
                id: '7-6',
                router: '/rests/seamlessRolling',
            }, {
                name: 'notepad',
                path: 'notepad',
                id: '7-7',
                router: '/rests/notepad',
            }, {
                name: 'introductionPage',
                path: 'introductionPage',
                id: '7-8',
                router: '/rests/introductionPage',
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
            router: '/setting/editHeadPortrait',
        }, {
            name: 'updataPassword',
            path: 'updataPassword',
            id: '6-2',
            router: '/setting/updataPassword',
        }]
    }
]

//代码块 
const routerChunkI18n = [{
    name: 'HomePage',
    path: 'module',
    id: '0',
    router: '/home',
    icon: 'el-icon-monitor',
}]

// 标题
const titleI18n = {
    ChinaMap: 'China Map',
    LineChart: 'Line Chart',
    ColumnDiagram: 'Column Diagram',
    Pie: 'Pie',
}

//引导
const guide = {
    Guide:'Guide',
    Welcome: 'Welcome',
    GoToTheBootPage: 'Go to the boot page 👋',
    Menu: 'Menu',
    QuickMenuSwitch: 'Quick menu switch 👋',
    LockScreen: 'LockScreen',
    TapTheLockScreenWhenYouLeave: 'Tap the lock screen when you leave 👋',
    Refresh: 'Refresh',
    RefreshIntroduce: 'If you do not perform operations for a long time, you can refresh the page 👋', //If you do not perform operations for a long time, you can refresh the page
    Notification: 'Notification',
    NotificationIntroduce: 'You can view new information 👋', //You can view new information
    Language:'Language',
    LanguageIntroduce:'Language switching 👋',//Language switching
    FullScreen:"FullScreen",
    FullScreenIntroduce:'The page is displayed in full screen 👋',//The page is displayed in full screen
    Minification:"Minification",
    MinificationIntroduce:'Shrink the route menu bar 👋',//Shrink the route menu bar
    RouteMenu:'RouteMenu',
    RouteMenuIntroduce:'Route menu switch skip 👋'//Route menu switch skip
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
    titleI18n,
    guide
}