export default [{
        path: '/homePage',
        name: 'homePage',
        meta: {
            title: '首页',
            path: '/views/homePage'
        },
        component: () => import('@/views/homePage'),
        redirect: '/children',
        children: [{
                path: '/children',
                meta: {
                    title: '概况'
                },
                component: () => import('@/views/homePage/children.vue')
            },
            //组件
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
                path: '/dragSort',
                name: 'dragSort',
                meta: {
                    title: '拖动排序'
                },
                component: () => import('../views/tips/dragSort')
            },
            {
                path: '/verificationCode',
                name: 'verificationCode',
                meta: {
                    title: '验证码'
                },
                component: () => import('../views/tips/verificationCode')
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
                path: '/render',
                name: 'render',
                meta: {
                    title: 'render函数测试'
                },
                component: () => import('../views/tips/render')
            },
            {
                path: '/echarts',
                name: 'echarts',
                meta: {
                    title: '图表'
                },
                component: () => import('../views/tips/echarts')
            },
            {
                path: '/waterfallFlow',
                name: 'waterfallFlow',
                meta: {
                    title: '瀑布流'
                },
                component: () => import('../views/tips/waterfallFlow')
            },
            {
                path: '/tree',
                name: 'tree',
                meta: {
                    title: '树形结构'
                },
                component: () => import('../views/tips/tree')
            },

            //地图
            {
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

            //列表
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

            // 接口
            {
                path: '/memorandum',
                name: 'memorandum',
                meta: {
                    title: '备忘录'
                },
                component: () => import('../views/tips/memorandum')
            },
            {
                path: '/requestText',
                name: 'requestText',
                meta: {
                    title: '接口测试'
                },
                component: () => import('../views/requestText')
            },

            //功能
            {
                path: '/customInstruction',
                name: 'customInstruction',
                meta: {
                    title: '自定义指令'
                },
                component: () => import('../views/tips/customInstruction')
            },
            {
                path: '/dateConversion',
                name: 'dateConversion',
                meta: {
                    title: '时间转化'
                },
                component: () => import('../views/tips/dateConversion')
            },
            {
                path: '/tableSearch',
                name: 'tableSearch',
                meta: {
                    title: '后台常用模版'
                },
                component: () => import('../views/commonCopy/tableSearch')
            },
            {
                path: '/methods',
                name: 'methods',
                meta: {
                    title: '常用的'
                },
                component: () => import('../views/methods/index'),
            },
            {
                path: '/vuex',
                name: 'vuex',
                meta: {
                    title: 'vuex',
                    require: true,
                },
                component: () => import('../views/vuex')
            },
            {
                path: '/setting',
                name: 'setting',
                meta: {
                    title: '设置',
                },
                component: () => import('../views/setting')
            },
        ]
    },

]