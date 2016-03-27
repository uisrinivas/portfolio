//testing
var gulp=require('gulp');
var jasmine = require('gulp-jasmine');
gulp.task('testing',function(){
	return gulp.src('test/**/*.js')
	.pipe(jasmine())
})