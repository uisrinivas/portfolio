var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
const jasmine = require('gulp-jasmine');
const preen = require('preen')

// js task goes here
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

// html task goes here
gulp.task('htmlmin',function(){
	return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})
// css task goes here
gulp.task('css',function(){
	 return gulp.src('public/css/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css/main.css'));
})

//comman task goes here

gulp.task('clean',function(){
	return gulp.src('dist')
	.pipe(clean({force: true}))
	
})
// Static server
gulp.task('reload', function() {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });
});
gulp.task('packages', function(cb) {
  preen.preen({}, cb);
});

//testing
gulp.task('testing',function(){
	return gulp.src('test/**/*.js')
	.pipe(jasmine())
})

gulp.task('default', ['packages','htmlmin','js','lint','browser']);
 // gulp.task('default', ['packages']);


gulp.task('html',['htmlmin'])
gulp.task('css',['css'])
gulp.task('browser',['reload'])

gulp.task('test',['testing'])