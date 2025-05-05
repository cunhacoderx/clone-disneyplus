const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp
    .src('./src/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css/'));
}

function images() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
  gulp.watch('./src/**/*.scss', gulp.parallel(styles));
  gulp.watch('./src/images/**/*', gulp.parallel(images));
};
