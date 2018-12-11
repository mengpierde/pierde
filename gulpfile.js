const gulp =require("gulp");

//拷贝文件
gulp.task("copy-html",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
//图片
gulp.task("images",function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//js
gulp.task("script",function(){
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//数据
gulp.task("data",function(){
	return gulp.src("data/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//建立工程
gulp.task("build",["copy-html","images","script","data","scss"],function(){
	console.log("工程建立完成")
})

// scss
const scss = require("gulp-sass-china")
gulp.task("scss",function(){
	return gulp.src("stylesheet/*.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
})

// //监听
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("*images/**/*",["images"]);
	gulp.watch("data/*.json",["data"]);
	gulp.watch("js/*.js", ['script']);
	gulp.watch("stylesheet/*.scss", ['scss']);
})

// //启动服务
const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:9999,
		livereload:true
	})
})


// //默认任务
gulp.task("default", ['watch', 'server']);




