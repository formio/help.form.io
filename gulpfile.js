const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const wiredep = require('wiredep').stream;
const sass = require('gulp-sass');
const filter = require('gulp-filter');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const s3 = require('gulp-s3');

gulp.task('styles', () => gulp.src('assets/index.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(replace(/\.\.\/node_modules\/font-awesome\//g, ''))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('assets'))
);

gulp.task('scripts', () => webpackStream(require('./webpack.config'), webpack).pipe(gulp.dest('assets')));
gulp.task('fonts', () => gulp.src('./node_modules/font-awesome/fonts/*').pipe(gulp.dest('assets/fonts')));
gulp.task('build', gulp.series('styles', 'scripts', 'fonts'));

gulp.task('deploy:howitworks', function () {
  var aws = require('./aws.json');
  aws.bucket = 'brochure.form.io';
  return gulp.src('./**/*').pipe(filter(['howitworks/**/*'])).pipe(s3(aws));
});

gulp.task('deploy:test', function() {
  var aws = require('./aws.json');
  aws.bucket = 'help.test-form.io';
  return gulp.src(['_site/**/*', '!**/node_modules/**']).pipe(s3(aws));
});

gulp.task('deploy:prod', function() {
  var aws = require('./aws.json');
  aws.bucket = 'help.form.io';
  aws.region = 'us-west-2';
  return gulp.src(['_site/**/*', '!**/node_modules/**']).pipe(s3(aws));
});
