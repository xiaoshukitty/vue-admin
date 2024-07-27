//首页-项目
export const webItems = [{
    id: 1,
    title: "Github",
    introduce: "不要等待机会，而要创造机会。",
    webDate: '2024-07-27',
    type: '开源组',
    icon: 'icon-github-fill',
    link: 'https://github.com/xiaoshukitty',
}, {
    id: 2,
    title: "Vue",
    introduce: "现在的你决定将来的你。",
    webDate: '2024-07-27',
    type: '算法组',
    icon: 'icon-Vue',
    link: 'https://cn.vuejs.org/',
}, {
    id: 3,
    title: "Html5",
    introduce: "没有什么才能比努力更重要。",
    webDate: '2024-07-27',
    type: '上班摸鱼',
    icon: 'icon-HTML5',
    link: 'https://www.runoob.com/html/html5-intro.html',
}, {
    id: 4,
    title: "Vite",
    introduce: "热情和欲望可以突破一切难关。",
    webDate: '2024-07-27',
    type: '技术牛',
    icon: 'icon-vitejs',
    link: 'https://vitejs.cn/',
}, {
    id: 5,
    title: "Element",
    introduce: '健康的身体是实现目标的基石。',
    webDate: '2024-07-27',
    type: 'UI',
    icon: 'icon-element ui',
    link: 'https://element.eleme.cn/#/zh-CN',
}, {
    id: 6,
    title: "Js",
    introduce: "路是走出来的，而不是空想出来的。",
    webDate: '2024-07-27',
    type: '架构组',
    icon: 'icon-JavaScript',
    link: 'https://www.w3school.com.cn/js/index.asp',
}]

//首页 - 快捷导航
export const navigationList = [{
    id: '0',
    name: "首页",
    title: "首页",
    path: 'home',
    icon: 'el-icon-monitor',
    color: '#1afa29',
    router: '/home',
    iconCopy: 'el-icon-monitor',
}, {
    id: '1-19',
    name: "文字滚动",
    title: "组件",
    icon: 'el-icon-school',
    color: '#d81e06',
    router: '/tips/scrollText',
    iconCopy: 'el-icon-s-grid',
    path: "scrollText"
}, {
    id: '2-1',
    name: "高德地图",
    title: "地图",
    icon: 'el-icon-map-location',
    color: '#f4ea2a',
    router: '/map/elMap',
    iconCopy: 'el-icon-location',
    path: 'elMap',
}, {
    id: '3-1',
    name: "图片预览",
    title: "图片",
    icon: 'el-icon-full-screen',
    color: '#1296db',
    router: '/picture/copywriting',
    iconCopy: 'el-icon-picture',
    path: 'copywriting'
}, {
    id: '5-2',
    name: "时间转化",
    title: '功能',
    icon: 'el-icon-alarm-clock',
    color: '#13227a',
    router: '/function/dateConversion',
    iconCopy: 'el-icon-message',
    path: 'dateConversion'
}, {
    id: '7-4',
    name: "视频播放",
    title: '其他',
    icon: 'el-icon-video-camera',
    color: '#d4237a',
    router: '/rests/videoDisplay',
    iconCopy: "el-icon-s-platform",
    path: "videoDisplay"
}]

//首页 - 动态数据
export const dynamicData = [{
    id: 1,
    name: "小舒",
    icon: 'icon-woman-avatar-1',
    date: '刚刚',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 2,
    name: "小小舒",
    icon: 'icon-woman-avatar-2',
    date: '1个小时前',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 3,
    name: "小欢",
    icon: 'icon-man-avatar-3',
    date: '1天前',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 4,
    name: "小阿欢",
    icon: 'icon-man-avatar-2',
    date: '2天前',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 5,
    name: "小阿欢",
    icon: 'icon-woman-avatar-4',
    date: '3天前',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 6,
    name: "阿欢",
    icon: 'icon-man-avatar-1',
    date: '一周前',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 7,
    name: "阿小欢",
    icon: 'icon-man-avatar-5',
    date: '2个月前',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 8,
    name: "小欢",
    icon: 'icon-woman-avatar-6',
    date: '半年前',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 9,
    name: "小阿欢",
    icon: 'icon-woman-avatar-7',
    date: '2024-05-20 13:14',
    info: '在 组件 创建了 文字滚动 组件',
}, {
    id: 10,
    name: "小舒",
    icon: 'icon-woman-avatar-8',
    date: '2023-05-20 13:14',
    info: '在 组件 创建了 文字滚动 组件',
}, ]