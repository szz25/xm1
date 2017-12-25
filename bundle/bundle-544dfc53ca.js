(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./js/dis/accordion');
require('./js/dis/main')
require('./js/dis/button');
require('./js/dis/uiRouter');
angular.bootstrap(document.documentElement, ['bootstrapApp', 'mainC', 'appButton', 'uiRouter']);
},{"./js/dis/accordion":2,"./js/dis/button":3,"./js/dis/main":4,"./js/dis/uiRouter":5}],2:[function(require,module,exports){
angular.module('bootstrapApp', ['ui.bootstrap', 'ngAnimate'])
    .controller('left', ['$scope', function($scope) {
        $scope.groups = [{
                title: '考试管理',
                content: [{
                    con: '开始考试',
                    url: 'startTeam'
                }, {
                    con: '历史试卷',
                    url: 'endTeam'
                }]
            },
            {
                title: '工具下载',
                content: [{
                    con: '学习工具下载',
                    url: 'studyTool'
                }]
            },
            {
                title: '错题管理',
                content: [{
                    con: '上传错题图片',
                    url: 'uploading'
                }]
            },
            {
                title: '图片管理',
                content: [{
                    con: '添加图册',
                    url: 'addPhotoAlbum'
                }, {
                    con: '图册列表',
                    url: 'list'
                }, {
                    con: '添加图片',
                    url: 'addPicture'
                }]
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }]);
},{}],3:[function(require,module,exports){
angular.module('appButton', ['ui.bootstrap', 'ngAnimate'])
    .controller('button', ['$scope', '$log', function($scope, $log) {
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
    }])
},{}],4:[function(require,module,exports){
module.exports = angular.module('mainC', [])
    .controller('main', ['$scope', function($scope) {

    }])
},{}],5:[function(require,module,exports){
angular.module('uiRouter', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('startTeam', {
            url: '/startTeam',
            templateUrl: './html/startTeam.html'
        }).state('endTeam', {
            url: '/endTeam',
            templateUrl: './html/endTeam.html'
        }).state('uploading', {
            url: '/uploading',
            templateUrl: './html/uploading.html'
        }).state('startTeam', {
            url: '/startTeam',
            templateUrl: './html/startTeam.html'
        }).state('startTeam', {
            url: '/startTeam',
            templateUrl: './html/startTeam.html'
        }).state('startTeam', {
            url: '/startTeam',
            templateUrl: './html/startTeam.html'
        })
    }])
},{}]},{},[1]);
