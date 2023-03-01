export default [{
        path: '/verificationCode',
        name: 'verificationCode',
        meta: {
            title: '验证码'
        },
        component: () => import('../views/tips/verificationCode')
    },
    {
        path: '/drag',
        name: 'drag',
        meta: {
            title: '原生拖拽'
        },
        component: () => import('../views/tips/drag')
    },
    {
        path: '/vuedraggable',
        name: 'vuedraggable',
        meta: {
            title: '组件拖拽'
        },
        component: () => import('../views/tips/drag/vuedraggable')
    },
    {
        path: '/tree',
        name: 'tree',
        meta: {
            title: '树形结构'
        },
        component: () => import('../views/tips/tree')
    },
    {
        path: '/virtualList',
        name: 'virtualList',
        meta: {
            title: '不固定高度虚拟列表'
        },
        component: () => import('../views/tips/virtualList')
    },
    {
        path: '/virtual',
        name: 'virtual',
        meta: {
            title: '固定高度虚拟列表'
        },
        component: () => import('../views/tips/virtual')
    },
    {
        path: '/canvas',
        name: 'canvas',
        meta: {
            title: 'canvas画图'
        },
        component: () => import('../views/tips/canvas')
    },
    {
        path: '/imgPreview',
        name: 'imgPreview',
        meta: {
            title: '图片预览'
        },
        component: () => import('../views/tips/imgPreview')
    },
    {
        path: '/print',
        name: 'print',
        meta: {
            title: '打印'
        },
        component: () => import('../views/tips/print')
    },
    {
        path: '/copy',
        name: 'copy',
        meta: {
            title: '复制'
        },
        component: () => import('../views/tips/copy')
    },
    {
        path: '/barCode',
        name: 'barCode',
        meta: {
            title: '条形码'
        },
        component: () => import('../views/tips/barCode')
    },
]