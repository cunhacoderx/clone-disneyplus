const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglyfy = require('gulp-uglify');

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

function scripts() {
  return gulp.src('./js/main.js')
    .pipe(uglyfy())
    .pipe(gulp.dest('./dist/script'))
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
  gulp.watch('./src/**/*.scss', gulp.parallel(styles));
  gulp.watch('./assets/images/**/*', gulp.parallel(images));
  gulp.watch('./js/main.js', gulp.parallel(scripts));
};
