var gulp = require('gulp');
var wiredep = require('wiredep').stream;
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
    return gulp.src('./**/*')
        .pipe(filter(['howitworks/**/*']))
        .pipe(s3(require('./aws.json')));
});