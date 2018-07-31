const data = [
    {
        name: '入网配置',
        icon: 'icon-border-all',
        children: [
            {
                name: '设备激活',
                path: '/internet/activation'
            },
            {
                name: '网络配置',
                path: '/internet/deploy'
            },
            
        ]
    },
    {
        name: '设备配置',
        icon: 'icon-cog',
        children: [
            {
                name: '人脸网管管理',
                path: '/devicedeploy/face'
            },
            {
                name: '摄像头管理',
                path: '/devicedeploy/carmera'
            },
            {
                name: '网络继电器管理',
                path: '/devicedeploy/relay'
            },
        ]
    },
    {
        name: '功能管理',
        icon: 'icon-tuning',
        children: [
            {
                name: '位置信息',
                path: '/devicedeploy/position'
            },
            {
                name: '人脸库信息',
                path: '/devicedeploy/faceInfo'
            },
            {
                name: '通道设置',
                path: '/devicedeploy/wayInfo'
            },
        ]
    },
    {
        name: '工程操作',
        icon: 'icon-show-sidebar',
        children: [
            {
                name: '工程测试',
                path: '/devicedeploy/projectTest'
            },
            {
                name: '查看人脸库',
                path: '/devicedeploy/faceList'
            }
        ]
    },
    {
        name: '系统管理',
        icon: 'icon-computer-desktop',
        children: [
            {
                name: '系统操作',
                path: '/devicedeploy/system'
            },
            {
                name: '系统日记',
                path: '/devicedeploy/systemLog'
            },
            {
                name: '存储',
                path: '/devicedeploy/storage'
            }
        ]
    },
]

export default data