'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');

var cleanCssOptions = {
  level: 2
}

gulp.task('buildStyles', function() {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({


    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('./styles.scss', ['buildStyles'])
});

gulp.task('reload', function() {
  browserSync.init({
    server: './'
  });
})

gulp.task('default', ['reload','buildStyles', 'watch']);
