export default [{
    path: '/port',
    name: 'port',
    meta: {
        title: '接口',
        require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/port/memorandum',
    children: [{
        path: '/port/memorandum',
        name: 'memorandum',
        meta: {
            title: '备忘录'
        },
        component: () => import('../views/port/memorandum')
    }, {
        path: '/port/requestText',
        name: 'requestText',
        meta: {
            title: '接口测试'
        },
        component: () => import('../views/port/requestText')
    }, ]
},]