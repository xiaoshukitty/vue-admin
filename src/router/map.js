export default [{
        path: '/elMap',
        name: 'elMap',
        meta: {
            title: '高德地图'
        },
        component: () => import('../views/map/elMap')
    },
    {
        path: '/qqMap',
        name: 'qqMap',
        meta: {
            title: 'QQ地图'
        },
        component: () => import('../views/map/qqMap')
    },
    {
        path: '/autoNaviMap',
        name: 'autoNaviMap',
        meta: {
            title: '高德地图'
        },
        component: () => import('../views/map/autoNaviMap')
    },
]