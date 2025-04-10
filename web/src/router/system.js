// 系统管理路由
export const systemAddRouter = [
    {
        name:'systemuser',
        path: 'system/user',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/system/user')
    },
    {
        name:'systemgongsi',
        path: 'system/gongsi',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/system/gongsi')
    },
    {
        name:'systemartcle',
        path: 'system/artcle',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/system/artcle')
    },


    {
        name:'systemannouncement',
        path: 'system/announcement',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/system/announcement')
    },

    {
        name:'systemfankui',
        path: 'system/fankui',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/fankui')
    },

    {
        name:'systemshenhe',
        path: 'system/shenhe',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/shenhe')
    },

    {
        name:'systemactivity',
        path: 'system/activity',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/activity')
    },

    {
        name:'my',
        path: 'system/my',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/my')
    },
    {
        name:'basepage',
        path: 'system/basepage',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/basepage')
    },
    {
        name:'jiaofei',
        path: 'system/jiaofei',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/jiaofei')
    },
    {
        name:'baoxiu',
        path: 'system/baoxiu',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/baoxiu')
    },
    {
        name:'fangwen',
        path: 'system/fangwen',
        desc: '',
        meta: {keepAlive: false},    // 需要缓存
        component: () => import('@/views/menu/system/fangwen')
    },


    
]