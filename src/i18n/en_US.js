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
    TokenExpired: "If the token expires, close and log in again",
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
    BtnAuth: "BtnAuth",
    Share: 'Share',
    SeamlessRolling: 'Seamless Rolling',
    GlobalSearch: 'GlobalSearch ⌘ + K',
    LockScreen: 'Lock Screen',
    Inform: "Inform",
    PleaseEnterTheScreenLockPassword: 'Please Enter The Screen Lock Password',
    LockedScreen: 'Locked Screen',
    Unlock: "Unlock",
    SwitchWallpaper: "Switch Wallpaper",
    TheScreenLockPasswordCannotBeEmpty: "The Screen Lock Password Cannot Be Empty",
    ScrollText: 'Scroll Text',
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
                router: '/tips/print',
                icon: 'el-icon-printer',
            },
            {
                name: 'Copy',
                path: 'copy',
                id: '1-2',
                router: '/tips/copy',
                icon: 'el-icon-document-copy',
            },
            {
                name: 'BarCode',
                path: 'barCode',
                id: '1-3',
                router: '/tips/barCode',
                icon: 'el-icon-c-scale-to-original'
            },
            {
                name: 'Drag',
                path: 'drag',
                id: '1-4',
                router: '/tips/drag',
                icon: 'el-icon-set-up'
            },
            {
                name: 'Vuedraggable',
                path: 'vuedraggable',
                id: '1-5',
                router: '/tips/vuedraggable',
                icon: 'el-icon-turn-off'
            },
            {
                name: 'DragSort',
                path: 'dragSort',
                id: '1-6',
                router: '/tips/dragSort',
                icon: 'el-icon-open'
            },
            {
                name: 'Verification Code',
                path: 'verificationCode',
                id: '1-7',
                router: '/tips/verificationCode',
                icon: 'el-icon-message'
            },
            {
                name: 'Canvas',
                path: 'canvas',
                id: '1-8',
                router: '/tips/canvas',
                icon: 'el-icon-crop'
            },
            {
                name: 'ImgPreview',
                path: 'imgPreview',
                id: '1-9',
                router: '/tips/imgPreview',
                icon: 'el-icon-reading'
            },
            {
                name: 'Render',
                path: 'render',
                id: '1-10',
                router: '/tips/render',
                icon: 'el-icon-paperclip'
            },
            {
                name: 'Echarts',
                path: 'echarts',
                id: '1-11',
                router: '/tips/echarts',
                icon: 'el-icon-document'
            },
            {
                name: 'Waterfall Flow',
                path: 'waterfallFlow',
                id: '1-12',
                router: '/tips/waterfallFlow',
                icon: 'el-icon-takeaway-box'
            },
            {
                name: 'Tree',
                path: 'tree',
                id: '1-13',
                router: '/tips/tree',
                icon: 'el-icon-no-smoking'
            },
            {
                name: 'richText',
                path: 'richText',
                id: '1-14',
                router: '/tips/richText',
                icon: 'el-icon-files'
            },
            {
                name: 'virtual',
                path: 'virtual',
                id: '1-15',
                router: '/tips/virtual',
                icon: 'el-icon-notebook-1'
            },
            {
                name: 'virtualList',
                path: 'virtualList',
                id: '1-16',
                router: '/tips/virtualList',
                icon: 'el-icon-notebook-2'
            },
            {
                name: 'animations',
                path: 'animations',
                id: '1-17',
                router: '/tips/animations',
                icon: 'el-icon-toilet-paper'
            },
            {
                name: 'dragBlock',
                path: 'dragBlock',
                id: '1-18',
                router: '/tips/dragBlock',
                icon: 'el-icon-office-building'
            },
            {
                name: 'scrollText',
                path: 'scrollText',
                id: '1-19',
                router: '/tips/scrollText',
                icon: 'el-icon-school'
            },
            {
                name: 'particles',
                path: 'particles',
                id: '1-20',
                router: '/tips/particles',
                icon: 'el-icon-more-outline'
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
                icon: 'el-icon-location'
            },
            {
                name: 'QQ Map',
                path: 'qqMap',
                id: '2-2',
                router: '/map/qqMap',
                icon: "el-icon-place"
            },
        ]
    }, {
        name: 'picture',
        path: 'picture',
        id: '3',
        router: '',
        icon: 'el-icon-picture',
        children: [{
            name: 'copywriting',
            path: 'copywriting',
            id: '3-1',
            router: '/picture/copywriting',
            icon: "el-icon-full-screen"
        }, {
            name: 'pictureEffect',
            path: 'pictureEffect',
            id: '3-2',
            router: '/picture/pictureEffect',
            icon: "el-icon-copy-document"
        }, ]
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
                icon: "el-icon-mic"
            },
            {
                name: 'Request Text',
                path: 'requestText',
                id: '4-2',
                router: '/port/requestText',
                icon: "el-icon-trophy"
            },
            {
                name: 'updatePic',
                path: 'updatePic',
                id: '4-3',
                router: '/port/updatePic',
                icon: "el-icon-trophy-1"
            },
            {
                name: 'chatWebSocket',
                path: 'chatWebSocket',
                id: '4-4',
                router: '/port/chatWebSocket',
                icon: "el-icon-first-aid-kit"
            },
            {
                name: 'xcxFoods',
                path: 'xcxFoods',
                id: '4-5',
                router: '/port/xcxFoods',
                icon: "el-icon-mobile-phone"
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
                icon: "el-icon-key"
            },
            {
                name: 'Date Conversion',
                path: 'dateConversion',
                id: '5-2',
                router: '/function/dateConversion',
                icon: "el-icon-alarm-clock"
            },
            {
                name: 'Table Search',
                path: 'tableSearch',
                id: '5-3',
                router: '/function/tableSearch',
                icon: "el-icon-refrigerator"
            },
            {
                name: 'Methods',
                path: 'methods',
                id: '5-4',
                router: '/function/methods',
                icon: "el-icon-ice-cream-square"
            },
            {
                name: 'Vuex',
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
                name: 'rightMenu',
                path: 'rightMenu',
                id: '5-7',
                router: '/function/rightMenu',
                icon: "el-icon-s-data"
            },
            {
                name: 'btnAuth',
                path: 'btnAuth',
                id: '5-8',
                router: '/function/btnAuth',
                icon: "el-icon-help"
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
                icon: "el-icon-goblet"
            },
            {
                name: 'sliderVerification',
                path: 'sliderVerification',
                id: '7-2',
                router: '/rests/sliderVerification',
                icon: "el-icon-goblet-square"
            },
            {
                name: 'signature',
                path: 'signature',
                id: '7-3',
                router: '/rests/signature',
                icon: "el-icon-edit"
            },
            {
                name: 'videoDisplay',
                path: 'videoDisplay',
                id: '7-4',
                router: '/rests/videoDisplay',
                icon: "el-icon-video-camera"
            }, {
                name: 'share',
                path: 'share',
                id: '7-5',
                router: '/rests/share',
                icon: "el-icon-sell"
            },
            //  {
            //     name: 'seamlessRolling',
            //     path: 'seamlessRolling',
            //     id: '7-6',
            //     router: '/rests/seamlessRolling',
            // }, 
            {
                name: 'notepad',
                path: 'notepad',
                id: '7-7',
                router: '/rests/notepad',
                icon: "el-icon-date"
            }, {
                name: 'introductionPage',
                path: 'introductionPage',
                id: '7-8',
                router: '/rests/introductionPage',
                icon: 'el-icon-view'
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
            icon: 'el-icon-coordinate'
        }, {
            name: 'updataPassword',
            path: 'updataPassword',
            id: '6-2',
            router: '/setting/updataPassword',
            icon: 'el-icon-lock'
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
    Guide: 'Guide',
    Welcome: 'Welcome',
    GoToTheBootPage: 'Go to the boot page 👋',
    Menu: 'Menu',
    QuickMenuSwitch: 'Quick menu switch 👋',
    GlobalSearch: 'Global Search 👋',
    GlobalSearchCommandK: 'Global Search Command + K 👋',
    LockScreen: 'LockScreen',
    TapTheLockScreenWhenYouLeave: 'Tap the lock screen when you leave 👋',
    Refresh: 'Refresh',
    RefreshIntroduce: 'If you do not perform operations for a long time, you can refresh the page 👋', //If you do not perform operations for a long time, you can refresh the page
    Notification: 'Notification',
    NotificationIntroduce: 'You can view new information 👋', //You can view new information
    Language: 'Language',
    LanguageIntroduce: 'Language switching 👋', //Language switching
    FullScreen: "FullScreen",
    FullScreenIntroduce: 'The page is displayed in full screen 👋', //The page is displayed in full screen
    Minification: "Minification",
    MinificationIntroduce: 'Shrink the route menu bar 👋', //Shrink the route menu bar
    RouteMenu: 'RouteMenu',
    RouteMenuIntroduce: 'Route menu switch skip 👋' //Route menu switch skip
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