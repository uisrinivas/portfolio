var gulp=require('gulp');
var htmlmin = require('gulp-htmlmin');


gulp.task('htmlmin',function(){
	return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})

gulp.task('html',['htmlmin'])

