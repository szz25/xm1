angular.module('uiRouter', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('initial')
        $stateProvider.state('startTeam', {
            url: '/startTeam',
            templateUrl: './html/startTeam.html',
            controller: ['$scope', '$http', function($scope, $http) {
                $http({
                    url: 'http://localhost:8888/list',
                    method: 'POST'
                }).then(function(result) {
                    $scope.list = result.data.list
                })
                $scope.inp = false
                $scope.redact = function() {
                    if (this.inp === true) {
                        this.inp = false
                    } else {
                        this.inp = true
                    }
                }
                $scope.omit = function() {
                    const that = this;
                    let arr = [];
                    $scope.list.forEach(function(v) {
                        if (that.val !== v) {
                            arr.push(v)
                        }
                    })
                    $scope.list = arr
                }
            }]
        }).state('endTeam', {
            url: '/endTeam',
            templateUrl: './html/endTeam.html'
        }).state('uploading', {
            url: '/uploading',
            templateUrl: './html/uploading.html'
        }).state('addPhotoAlbum', {
            url: '/addPhotoAlbum',
            templateUrl: './html/addPhotoAlbum.html'
        }).state('list', {
            url: '/list',
            templateUrl: './html/list.html'
        }).state('addPicture', {
            url: '/addPicture',
            templateUrl: './html/addPicture.html'
        }).state('studyTool', {
            url: '/studyTool',
            templateUrl: './html/studyTool.html'
        }).state('initial', {
            url: '/initial',
            templateUrl: './html/initial.html'
        })
    }])