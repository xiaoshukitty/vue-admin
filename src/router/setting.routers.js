export default [{
    path: '/setting',
    name: 'setting',
    meta: {
        title: '设置',
        require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/setting/editHeadPortrait',
    children: [{
            path: '/setting/editHeadPortrait',
            name: 'editHeadPortrait',
            meta: {
                title: '修改头像',
            },
            component: () => import('../views/setting/editHeadPortrait')
        },
        {
            path: '/setting/updataPassword',
            name: 'updataPassword',
            meta: {
                title: '修改密码',
            },
            component: () => import('../views/setting/updataPassword')
        },
        {
            path: '/setting/userManagement',
            name: 'userManagement',
            meta: {
                title: '用户管理',
            },
            component: () => import('../views/setting/userManagement')
        },
    ]
}, ]