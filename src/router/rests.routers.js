export default [{
    path: '/rests',
    name: 'rests',
    meta: {
        title: '其他',
        require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/rests/lottery',
    children: [{
            path: '/rests/lottery',
            name: 'lottery',
            meta: {
                title: '抽奖',
            },
            component: () => import('../views/rests/lottery')
        },
        {
            path: '/rests/sliderVerification',
            name: 'sliderVerification',
            meta: {
                title: '滑块验证',
            },
            component: () => import('../views/rests/sliderVerification')
        },
        {
            path: '/rests/signature',
            name: 'signature',
            meta: {
                title: '签名',
            },
            component: () => import('../views/rests/signature')
        },
        {
            path: '/rests/videoDisplay',
            name: 'videoDisplay',
            meta: {
                title: '视频播放',
            },
            component: () => import('../views/rests/videoDisplay')
        }, ,
        {
            path: '/rests/share',
            name: 'share',
            meta: {
                title: '分享',
            },
            component: () => import('../views/rests/share')
        }, {
            path: '/rests/seamlessRolling',
            name: 'seamlessRolling',
            meta: {
                title: '无缝滚动',
            },
            component: () => import('../views/rests/seamlessRolling')
        }, {
            path: '/rests/notepad',
            name: 'notepad',
            meta: {
                title: '记事本',
            },
            component: () => import('../views/rests/notepad')
        }, {
            path: '/rests/introductionPage',
            name: 'introductionPage',
            meta: {
                title: '引导页',
            },
            component: () => import('../views/rests/introductionPage')
        },
    ]
}]