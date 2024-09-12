export default [{
    path: '/function',
    name: 'function',
    meta: {
        title: '功能',
        require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/function/customInstruction',
    children: [{
            path: '/function/customInstruction',
            name: 'customInstruction',
            meta: {
                title: '自定义指令'
            },
            component: () => import('../views/function/customInstruction')
        },
        {
            path: '/function/dateConversion',
            name: 'dateConversion',
            meta: {
                title: '时间转化'
            },
            component: () => import('../views/function/dateConversion')
        },
        {
            path: '/function/tableSearch',
            name: 'tableSearch',
            meta: {
                title: '后台常用模版'
            },
            component: () => import('../views/function/tableSearch')
        },
        // {
        //     path: '/function/methods',
        //     name: 'methods',
        //     meta: {
        //         title: '常用的'
        //     },
        //     component: () => import('../views/function/methods'),
        // },
        {
            path: '/function/vuex',
            name: 'vuex',
            meta: {
                title: 'vuex',
                require: true,
            },
            component: () => import('../views/function/vuex')
        },
        {
            path: '/function/test',
            name: 'test',
            meta: {
                title: 'test',
                require: true,
            },
            component: () => import('../views/test')
        },
        {
            path: '/function/rightMenu',
            name: 'rightMenu',
            meta: {
                title: '右键菜单',
                require: true,
            },
            component: () => import('../views/function/rightMenu')
        },
        {
            path: '/function/btnAuth',
            name: 'btnAuth',
            meta: {
                title: '按钮权限',
                require: true,
            },
            component: () => import('../views/function/btnAuth')
        },
        {
            path: '/function/voice',
            name: 'voice',
            meta: {
                title: '语音合成',
                require: true,
            },
            component: () => import('../views/function/voice')
        },
        {
            path: '/function/download',
            name: 'download',
            meta: {
                title: '下载',
                require: true,
            },
            component: () => import('../views/function/download')
        },
        {
            path: '/function/colorTakingPlate',
            name: 'colorTakingPlate',
            meta: {
                title: '取色器',
                require: true,
            },
            component: () => import('../views/function/colorTakingPlate')
        },
    ]
}, ]