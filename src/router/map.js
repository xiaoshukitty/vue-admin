export default [{
        path: '/elMap',
        name: 'elMap',
        component: () => import('../views/map/elMap')
    },
    {
        path: '/qqMap',
        name: 'qqMap',
        component: () => import('../views/map/qqMap')
    },
]