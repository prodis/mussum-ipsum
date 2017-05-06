var gulp 		      = require('gulp');
var $       	    = require('gulp-load-plugins')();
var	uglify 		    = require('gulp-uglify');
var	clean 		    = require('gulp-clean');
var	concat 		    = require('gulp-concat');
var runSeq        = require('run-sequence');

var src = 'src/mipsum.js'
    dist = 'dist';

// Files
gulp.task('clean', function (cb) {
  return gulp.src(dist, {read: false})
    .pipe(clean());
  cb(err);
});


gulp.task('copy', function() {
  return gulp.src(src)
    .pipe(gulp.dest(dist));
});


// Javascript
gulp.task('js', function() {
  return gulp.src(src)
    .pipe(concat('mipsum.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dist));
});

// Build task
gulp.task('default', function (cb) {
  runSeq('clean', ['copy', 'js'], cb)
});