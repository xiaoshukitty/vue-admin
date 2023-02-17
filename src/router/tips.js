export default [{
        path: '/verificationCode',
        name: 'verificationCode',
        component: () => import('../views/tips/verificationCode')
    },
    {
        path: '/drag',
        name: 'drag',
        component: () => import('../views/tips/drag')
    },
    {
        path: '/vuedraggable',
        name: 'vuedraggable',
        component: () => import('../views/tips/drag/vuedraggable')
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('../views/tips/tree')
    },
    {
        path: '/virtualList',
        name: 'virtualList',
        component: () => import('../views/tips/virtualList')
    },
    {
        path: '/virtual',
        name: 'virtual',
        component: () => import('../views/tips/virtual')
    },
    {
        path: '/canvas',
        name: 'canvas',
        component: () => import('../views/tips/canvas')
    },
    {
        path: '/imgPreview',
        name: 'imgPreview',
        component: () => import('../views/tips/imgPreview')
    },
    {
        path: '/print',
        name: 'print',
        component: () => import('../views/tips/print')
    },
    {
        path: '/copy',
        name: 'copy',
        component: () => import('../views/tips/copy')
    },
    {
        path: '/barCode',
        name: 'barCode',
        component: () => import('../views/tips/barCode')
    },
]