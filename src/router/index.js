import Vue from 'vue'
import Router from 'vue-router'

/**
 * 路由懒加载配置
 * 关于bable "syntax-dynamic-import"
 */
const Main = () => import('@/pages/main/index')
const DeviceActivation = () => import('@/pages/main/DeviceActivation/DeviceActivation')
const InterDeploy = () => import('@/pages/main/InterDeploy/InterDeploy')
const FaceManage = () => import('@/pages/main/FaceManage/FaceManage')
const CameraManage = () => import('@/pages/main/CameraManage/CameraManage')
const RelayManage = () => import('@/pages/main/RelayManage/RelayManage')
const PositionInfo = () => import('@/pages/main/PositionInfo/PositionInfo')
const FaceInfo = () => import('@/pages/main/FaceInfo/FaceInfo')
const WayInfo = () => import('@/pages/main/WayInfo/WayInfo')
const ProjectTest = () => import('@/pages/main/ProjectTest/ProjectTest')
const FaceList = () => import('@/pages/main/FaceList/FaceList')
const System = () => import('@/pages/main/System/System')
const SystemLog = () => import('@/pages/main/SystemLog/SystemLog')
const Storage = () => import('@/pages/main/Storage/Storage')

const Login = () => import('@/pages/login/Login/Login')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Main,
      redirect: '/login',
      children: [
        {
          path: '/internet/activation',
          component: DeviceActivation
        },
        {
          path: '/internet/deploy',
          component: InterDeploy
        },
        {
          path: '/devicedeploy/face',
          component: FaceManage
        },
        {
          path: '/devicedeploy/carmera',
          component: CameraManage
        },
        {
          path: '/devicedeploy/relay',
          component: RelayManage
        },
        {
          path: '/devicedeploy/position',
          component: PositionInfo
        },
        {
          path: '/devicedeploy/faceInfo',
          component: FaceInfo
        },
        {
          path: '/devicedeploy/wayInfo',
          component: WayInfo
        },
        {
          path: '/devicedeploy/projectTest',
          component: ProjectTest
        },
        {
          path: '/devicedeploy/faceList',
          component: FaceList
        },
        {
          path: '/devicedeploy/system',
          component: System
        },
        {
          path: '/devicedeploy/systemLog',
          component: SystemLog
        },
        {
          path: '/devicedeploy/storage',
          component: Storage
        },
      ]
    },{
      path: '/login',
      component: Login
    }
  ]
})
