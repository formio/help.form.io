var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('assets/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('wiredep', function() {
    gulp.src('./_layouts/base.md')
        .pipe(wiredep({
            ignorePath: '../',
            fileTypes: {
                html: {
                    replace: {
                        js: '<script src="{{ site.baseUrl }}/{{filePath}}"></script>',
                        css: '<link rel="stylesheet" href="{{ site.baseUrl }}/{{filePath}}" />'
                    }
                }
            }
        }))
        .pipe(gulp.dest('./_layouts'));
});

var s3 = require("gulp-s3");
var filter = require('gulp-filter');
gulp.task('deploy:howitworks', function () {
  var aws = require('./aws.json');
  aws.bucket = 'brochure.form.io';
  return gulp.src('./**/*').pipe(filter(['howitworks/**/*'])).pipe(s3(aws));
});

gulp.task('deploy:test', function() {
  var aws = require('../aws.json');
  aws.bucket = 'help.test-form.io';
  return gulp.src(['_site/**/*', '!**/node_modules/**']).pipe(s3(aws));
});

gulp.task('deploy:prod', function() {
  var aws = require('../aws.json');
  aws.bucket = 'help.form.io';
  aws.region = 'us-west-2';
  return gulp.src(['_site/**/*', '!**/node_modules/**']).pipe(s3(aws));
});
