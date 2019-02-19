/**
 * Created by Chowin on 2019/2/18.
 * 项目变量全局配置
 */

export default {
    /**
     * @description 显示在浏览器的页面title标签
     */
    title: 'qyj_admin',
    /**
     * @description token在Cookie中的存储时间
     */
    cookieExpires: 1,
    /**
     * @description 是否使用国际化，默认为false
     *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
     *              用来在菜单中显示文字
     */
    useI18n: true,
    /**
     * @description api请求的基础路径
     */
    baseUrl: {
        dev: '',
        pro: ''
    },
    /**
     * @description 首页的默认子路由
     */
    homeName: 'home'
}
