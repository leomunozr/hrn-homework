'use strict';

var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var gulp = require('gulp');
var minify = require('gulp-minify')
var sass = require('gulp-sass');

var cleanCssOptions = {
  level: 2
}
var minifyOptions = {
  noSource: true
}

gulp.task('buildStyles', function() {
  return gulp.src('./styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss(cleanCssOptions))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
});

gulp.task('minifyJs', function() {
  gulp.src('./js/*.js')
    .pipe(minify(minifyOptions))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch('./styles/*.scss', ['buildStyles'])
});

gulp.task('reload', function() {
  browserSync.init({
    server: './'
  });
})

gulp.task('default', ['minifyJs', 'reload','buildStyles', 'watch']);
