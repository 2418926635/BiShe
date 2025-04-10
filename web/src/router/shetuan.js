// 系统管理路由
export const shetuanAddRouter = [
    {
        name:'shetuanfloor',
        path: 'shetuan/floor',
        desc: '',
        meta: {keepAlive: false},    // false不需要缓存
        component: () => import('@/views/menu/shetuan/floor')
    }

    
]