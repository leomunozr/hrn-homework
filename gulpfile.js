'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('buildStyles', function() {
  return gulp.src('./styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./styles.scss', ['buildStyles'])
});

gulp.task('default', ['buildStyles', 'watch']);
