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