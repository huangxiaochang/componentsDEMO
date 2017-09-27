export const menuList = [
    {
        path: '/',
        name: '订单管理',
        iconCls: '',
        children: [
            {
                path: '/order',
                name: '订单管理首页',
                iconCls: ''
            },
            {
                path: '/orderList',
                name: '订单列表',
                iconCls: '',
                children: [
                    {
                        path: '/orderDetail',
                        name: '订单详情',
                        iconCls: '',
                    }
                ]
            },
        ]
    },
    {
        path: '/',
        name: '商品管理',
        iconCls: '',
        children: [
            {
                path: '/mall',
                name: '商品列表',
                iconCls: ''
            },
        ]
    },
]