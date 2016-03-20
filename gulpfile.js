var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

// js task goes here
gulp.task('js',function(){
	return gulp.src('public/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(babel({presets: ['es2015']}))
	.pipe(concat('js/all.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist'));
})

// html task goes here
gulp.task('htmlmin',function(){
	return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})
// css task goes here
gulp.task('css',function(){
	 return gulp.src('public/css/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css/main.css'));
})

//comman task goes here

gulp.task('clean',function(){
	return gulp.src('dist')
	.pipe(clean({force: true}))
	
})
gulp.task('default', ['clean','htmlmin','js']);
// gulp.task('default', ['css']);


gulp.task('html',['htmlmin'])
gulp.task('css',['css'])