angular.module('app', ['ui.bootstrap', 'ngAnimate'])
    .filter('bool', function() {
        return function(bool) {
            if (bool) {
                return '开放'
            } else {
                return '关闭'
            }
        }
    })