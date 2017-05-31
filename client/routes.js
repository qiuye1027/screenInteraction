// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        //首页
        path: '/',
        component: require('./common/containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/containers/App'))
                }, 'home')
            }
        },
        childRoutes: [{
            //素材管理
            path: 'material',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./material/containers/App'))
                }, 'material')
            }
        }, {
            //任务管理
            path: 'mession',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./mession/containers/App'))
                }, 'mession')
            }
        },{
            //节目管理
            path: 'program',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./program/containers/App'))
                }, 'program')
            }
        }, {
            //发送管理
            path: 'sent',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./sent/containers/App'))
                }, 'sent')
            }
        }, {
            //用户管理
            path: 'user',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./user/containers/App'))
                }, 'user')
            }
        }, {
            //客户管理
            path: 'customer',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./customer/containers/App'))
                }, 'customer')
            }
        }, {
            //审核管理
            path: 'examine',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./examine/containers/App'))
                }, 'examine')
            }
        }, {
            //系统设置
            path: 'setting',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./setting/containers/App'))
                }, 'setting')
            }
        }, {
            //用户激活页面
            path: 'activation',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./activation/containers/App'))
                }, 'activation')
            }
        }, {
            //单个终端
            path: 'singleClient',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/components/SingleClient'))
                }, 'singleClient')
            }
        }, {
            //终端列表
            path: 'clientList',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/components/ClientList'))
                }, 'clientList')
            }
        }]
    },{
        //登录管理
        path: '/login',
        getComponent(nextState, callback) {
            require.ensure([], require => {
                callback(null, require('./login/containers/App'))
            }, 'login')
        }
    }]
}

export default routes
