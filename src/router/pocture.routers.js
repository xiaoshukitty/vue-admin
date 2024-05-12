export default [{
    path: '/picture',
    name: 'picture',
    meta: {
        title: '图片',
        require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/picture/copywriting',
    children: [{
        path: '/picture/copywriting',
        name: 'copywriting',
        meta: {
            title: '图片预览'
        },
        component: () => import("../views/picture/copywriting")
    },{
        path: '/picture/pictureEffect',
        name: 'pictureEffect',
        meta: {
            title: '图片效果'
        },
        component: () => import("../views/picture/pictureEffect")
    }]
}, ]