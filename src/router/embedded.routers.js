export default [{
    path: '/embedded',
    name: 'embedded',
    meta: {
        title: '内嵌',
        require: true, //需要验证的
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/embedded/viteEmbedded',
    children: [{
        path: '/embedded/viteEmbedded',
        name: 'viteEmbedded',
        meta: {
            title: 'vite'
        },
        component: () => import('../views/embedded/viteEmbedded')
    }, ]
}, ]