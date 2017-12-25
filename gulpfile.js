var gulp = require('gulp')

var browserify = require('browserify') /*注意他不是以 gulp- 开头的包 说明他是一个node 的包 需要将node的流转成gulp的流*/

// browserify 是获取入口文件的

var source = require('vinyl-source-stream'); //合并js 的 

var buffer = require('vinyl-buffer'); // 把node 的流转为 gulp的流的

var connect = require('gulp-connect') // 启动前端服务的

var rev = require('gulp-rev') //生成md5后缀的

var collector = require('gulp-rev-collector'); //自动替换

var Mock = require('mockjs');

var watch = require('gulp-watch'); //检测文件变化的

var webserver = require('gulp-webserver');

var urls = require('url');
let i = new Date(Mock.Random.date()).getTime();
var obj = Mock.mock({
    'list|20': [{
        'name': "高级程序开发",
        "id|+1": 1,
        "bool|1-2": false,
        "startTime|+86400000": i,
        "endTime|+86400000": i + 1000 * 60 * 60,

    }]
})
gulp.task('module', function(callBack) {
    browserify({
            entries: ['./entry.js']
        }).bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(rev())
        .pipe(gulp.dest('./bundle/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./'))
        .on('end', callBack);
})
gulp.task('reloadSrc', ['module'], function(callBack) {
    setTimeout(function() {
        gulp.src(['./index.html', 'rev-manifest.json'])
            .pipe(collector({
                replaceReved: true
            }))
            .pipe(gulp.dest('./'))
            .on('end', callBack);
    }, 300)
})
gulp.task('reloadPage', ['reloadSrc'], function() {
    gulp.src('.')
        .pipe(connect.reload())
})
gulp.task('watch', function() {
    gulp.watch(['./js/*/*.js', './js/*.js', './entry.js'], ['module', 'reloadSrc', 'reloadPage'])
    gulp.watch(['./index.html', './css/*.css', './css/*/*.css'], ['reloadPage'])
})
gulp.task('httpServer', function() {
    connect.server({
        port: 8080,
        livereload: true
    })
})
gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            port: 8888,
            middleware: function(req, res, next) {
                const method = req.method;
                const url = urls.parse(req.url);
                const pathname = url.pathname;
                res.setHeader('Access-Control-Allow-Origin', '*')
                if (method === 'GET') {
                    res.end()
                } else if (method === 'POST') {
                    let data = '';
                    req.on('data', function(chunk) {
                        data += chunk;
                    })
                    req.on('end', function() {
                        switch (pathname) {
                            case '/list':
                                res.writeHead(200, {
                                    'content-type': 'application/json;charset=utf-8'
                                })
                                res.write(JSON.stringify(obj))
                                res.end()
                                break;
                            default:
                                break;
                        }
                    })
                } else if (method === 'OPTIONS') {
                    res.writeHead(200, {
                        'Access-Control-Allow-Origin': '*',
                        'Content-type': 'application/json;charset=utf-8',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept'
                    })
                }
            }
        }))
});
gulp.task('default', ['httpServer', 'watch', 'module', 'webserver'])