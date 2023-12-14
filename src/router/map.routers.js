export default [
    {
        path: '/map',
        name: 'map',
        meta: {
            title: '地图',
            require: true, //需要验证的
        },
        component: () => import('@/layout/index.vue'),
        redirect: '/map/qqMap',
        children: [{
                path: '/map/elMap',
                name: 'elMap',
                meta: {
                    title: '高德地图'
                },
                component: () => import('../views/map/elMap')
            },
            {
                path: '/map/qqMap',
                name: 'qqMap',
                meta: {
                    title: 'QQ地图'
                },
                component: () => import('../views/map/qqMap')
            },
        ],
    },
]