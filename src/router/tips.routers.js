export default [{
    path: '/tips',
    component: () => import('@/layout/index.vue'),
    name: 'tips',
    meta: {
        title: '组件',
        require: true,
    },
    redirect: '/tips/print', //访问一级路由直接重定向到二级路由的第一个
    children: [{
            path: '/tips/print',
            name: 'print',
            meta: {
                title: '打印'
            },
            component: () => import('../views/tips/print')
        },
        {
            path: '/tips/richText',
            name: 'richText',
            meta: {
                title: '富文本'
            },
            component: () => import('../views/tips/richText')
        },
        {
            path: '/tips/copy',
            name: 'copy',
            meta: {
                title: '复制'
            },
            component: () => import('../views/tips/copy')
        },
        {
            path: '/tips/barCode',
            name: 'barCode',
            meta: {
                title: '条形码'
            },
            component: () => import('../views/tips/barCode')
        },
        {
            path: '/tips/drag',
            name: 'drag',
            meta: {
                title: '原生拖拽'
            },
            component: () => import('../views/tips/drag')
        },
        {
            path: '/tips/vuedraggable',
            name: 'vuedraggable',
            meta: {
                title: '组件拖拽'
            },
            component: () => import('../views/tips/drag/vuedraggable')
        },
        {
            path: '/tips/dragSort',
            name: 'dragSort',
            meta: {
                title: '拖动排序'
            },
            component: () => import('../views/tips/dragSort')
        },
        {
            path: '/tips/verificationCode',
            name: 'verificationCode',
            meta: {
                title: '验证码'
            },
            component: () => import('../views/tips/verificationCode')
        },
        {
            path: '/tips/canvas',
            name: 'canvas',
            meta: {
                title: 'canvas画图'
            },
            component: () => import('../views/tips/canvas')
        },
        {
            path: '/tips/imgPreview',
            name: 'imgPreview',
            meta: {
                title: '图片预览'
            },
            component: () => import('../views/tips/imgPreview')
        },
        {
            path: '/tips/render',
            name: 'render',
            meta: {
                title: 'render函数测试'
            },
            component: () => import('../views/tips/render')
        },
        {
            path: '/tips/echarts',
            name: 'echarts',
            meta: {
                title: '图表'
            },
            component: () => import('../views/tips/echarts')
        },
        {
            path: '/tips/waterfallFlow',
            name: 'waterfallFlow',
            meta: {
                title: '瀑布流'
            },
            component: () => import('../views/tips/waterfallFlow')
        },
        {
            path: '/tips/tree',
            name: 'tree',
            meta: {
                title: '树形结构'
            },
            component: () => import('../views/tips/tree')
        },
        {
            path: '/tips/virtualList',
            name: 'virtualList',
            meta: {
                title: '不固定高度虚拟列表'
            },
            component: () => import('../views/tips/virtualList')
        },
        {
            path: '/tips/virtual',
            name: 'virtual',
            meta: {
                title: '固定高度虚拟列表'
            },
            component: () => import('../views/tips/virtual')

        },
        {
            path: '/tips/animations',
            name: 'animations',
            meta: {
                title: '动画'
            },
            component: () => import('../views/tips/animations')

        },

    ]
}, ]