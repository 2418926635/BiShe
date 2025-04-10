// 系统管理路由
export const xitiAddRouter = [
    {
        name:'xititype',
        path: 'xiti/xititype',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/xiti/xititype')
    },
    {
        name:'xiti',
        path: 'xiti/xiti',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/xiti/xiti')
    },
    {
        name:'xitiresult',
        path: 'xiti/result',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/xiti/result')
    }


    
]