var gulp          = require('gulp'),
    serve         = require('gulp-serve'),
    gp_concat     = require('gulp-concat'),
    gp_rename     = require('gulp-rename'),
    gp_uglify     = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
  return gulp.src(['source/*'])
             .pipe(gp_sourcemaps.init())
             .pipe(gp_concat('concat.js'))
             .pipe(gulp.dest('js'))
             .pipe(gp_rename('main.js'))
             //.pipe(gp_uglify())
             .pipe(gp_sourcemaps.write('./'))
             .pipe(gulp.dest('js'));
});

gulp.task('default', ['js'], function() {
  console.log('done :)');
});

gulp.task('watch', function () {
   gulp.watch('source/*', ['js']);
});

gulp.task('serve', ['watch'], serve('.'));