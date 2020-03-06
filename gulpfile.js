/*
    gulp 方法
    1.src()
        =>用来打包文件的
        =>src('你要打包的文件的地址')   
        =>返回值是一个二进制流,就可以继续去调用别的方法
        
    2. pipe()
        => 用来帮你做事情的
        => pipe(你要做的事情)
        => 返回值: 又是一个二进制流, 可以继续使用方法
    3. dest()
        => 用来写入文件的
        => 你要把已经压缩号的代码放在那一个文件夹里面
        => 如果没有你指定的文件夹, 会自动创建一个这个文件夹放进去
    4. parallel()
        => 用来并行执行多个任务的
        => gulp.parallel(你定义好的任务1, 你定义好的任务2, ...)
        => 他就会把这个几个任务都给你执行了
        => 返回值: 是一个任务流
        => 只要这个返回值以执行, 就能把你准备好的几个任务同时开始执行
    5. series()
        => 用来逐个执行多个任务的
        => gulp.series(任务1, 任务2, ...)
        => 返回值: 是一个任务流
        => 只要这个返回值一执行, 就能把你准备好的几个任务逐一完成
        -> 前一个任务完成在执行后面一个任务
    6. watch()
        => 用来监控文件变化的
        => gulp.watch(你要监控的文件目录, 你要执行的任务)
*/

//1.导入 gulp 这个第三方模块
const gulp = require('gulp')


//2.导入 gulp-cssmin 这个三分模块
const cssmin = require('gulp-cssmin')

// 2-2. 导入 gulp-autoprefixer 这个第三方模块
const autoprefixer = require('gulp-autoprefixer')

// 3. 导入 gulp-uglify 这个第三方模块
const uglify = require('gulp-uglify')

// 3-2. 导入 gulp-babel 这个第三方模块
//babel({presets:['@babel/env']})
const babel = require('gulp-babel')

//4.导入 gulp-htmlmin  这个第三方模块
const htmlmin = require('gulp-htmlmin')

//5.导入del 这个第三方模块
const del =require('del')

//6.导入gulp-webserver这个第三方模块
const webserver=require('gulp-webserver')

//7.导入gulp-sass这个第三方模块
const sass=require('gulp-sass')







//2.先写一个打包css的方法
const cssHandler = () => {
    return gulp.src('./src/css/*.css') //找到src目录下css目录下所有后缀为.css的文件
        .pipe(autoprefixer())//把css代码自动添加前缀
        .pipe(cssmin())//压缩css代码
        .pipe(gulp.dest('./dist/css'))//压缩完毕的css代码放在dist目录下的css文件里面
}

//3.书写一个打包js的方法
const jsHandler = () => {
    return gulp.src('./src/js/*.js')//找到文件
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())//压缩
        .pipe(gulp.dest('./dist/js'))//把压缩完毕的放入文件夹
}


//4.书写一个打包html的方法
const htmlHandler = () => {

    return gulp.src('./src/pages/*.html')//找到要压缩的html文件
        .pipe(htmlmin({
            removeAttributeQuotes: true,//移除双引号
            removeComments: true,//移除注释
            collapseBooleanAttributes: true,//
            collapseWhitespace: true,//移除所有空格
            minifyCSS: true,//把页面的style 标签里面的css样式也去空格
            minifyJS: true,//把页面里面的jscript标签里面的js压缩了
        }))//压缩
        .pipe(gulp.dest('./dist/pages'))

}

//5.写一个移动image  文件的方法
const imgHandle = () => {
    return gulp.src('./src/images/**')//文件夹下 的所有文件
        .pipe(gulp.dest('./dist/images'))
}

//6.书写一个移动 lib文件的方法
const libHandle = () => {
    return gulp.src('./src/lib/**')
        .pipe(gulp.dest('./dist/lib'))
}

//7.书写一个任务,自动删除dist 目录
const delHandler=()=>{
    return del(['./dist'])
}

//8.书写一个配置服务器的任务
//自动刷新：当dist目录里面的代码改变后,就会自动刷新浏览器
const serverHandel=()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        host:'localhost',//域名
        port:8080,//端口号
        open:'./pages/index.html',//默认打开的首页
        livereload:true,//自动刷新浏览器-热重启
        //所有的代理配置都在proxies 里面
        proxies:[
            //每一个代理配置就是一个对象
            {
                source:'/login',//源
                target:'http://localhost:80/leshi.php'//目标
            },{
                source:'/logon',//源
                target:'http://localhost:80/login.php'//目标
            }
        ]

    }))//开启服务器
}

//10.准备一个编译sass文件的函数
const sassHandler=()=>{
    return gulp
        .src('./src/sass/*.scss')
        .pipe(sass())//把sass代码转换成css代码
        .pipe(autoprefixer())//自动添加前缀
        .pipe(cssmin())//把已经转换号的css代码压缩
        .pipe(gulp.dest('./dist/sass'))//放到指定目录 
}


//9.自动监控文件
//监控src 下面的css文件夹,只要里面的文件一修改,就执行对应的任务
const watchHandler=()=>{
    gulp.watch('./src/css/*.css',cssHandler)
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/pages/*.html',htmlHandler)
    gulp.watch('./src/lib/**',libHandle)
    gulp.watch('./src/images/**',imgHandle)
    gulp.watch('./src/sass/*.scss',sassHandler)
}


module.exports.sass=sassHandler


//导出一个默认任务
//当我命令执行 gulp default 的时候, 就会自动把我写在parallel里面的五个任务一起执行了
//执行gulp default 可以不行default
// module.exports.default=gulp.parallel(cssHandler,jsHandler,libHandle,htmlHandler,imgHandle)
module.exports.default=gulp.series(
    delHandler,
    gulp.parallel(cssHandler,jsHandler,htmlHandler,imgHandle,libHandle,sassHandler),
    serverHandel,
    watchHandler
)

//最后到处文件里面准备好的方法

//
// module.exports.css = cssHandler

// module.exports.js = jsHandler

// module.exports.html = htmlHandler

// module.exports.image = imgHandle

// module.exports.lib = libHandle