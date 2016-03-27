var gulp=require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var eslint = require('gulp-eslint');

gulp.task('js',function(){
	return gulp.src('public/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(babel({presets: ['es2015']}))
	.pipe(concat('js/all.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist'));
})

gulp.task('lint', function() {
  return gulp.src('public/**/*.js')
    .pipe(jshint())
});

gulp.task('eslint',function(){
	return gulp.src('public/**/*.js')
	.pipe(eslint())
})

gulp.task('javascript', ['js','lint','eslint']);