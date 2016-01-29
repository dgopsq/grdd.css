var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    nano    = require('gulp-cssnano'),
    rename  = require('gulp-rename');

gulp.task('compile', function() {
  return gulp.src('grdd.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(nano({discardComments: {removeAllButFirst: true}}))
    .pipe(rename('grdd.min.css'))
    .pipe(gulp.dest('./'));
});
