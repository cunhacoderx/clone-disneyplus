const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp
    .src('./src/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/styles/'));
}

function images() {
  return gulp.src('./assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
  gulp.watch('./src/**/*.scss', gulp.parallel(styles));
  gulp.watch('./assets/images/**/*', gulp.parallel(images));
};
