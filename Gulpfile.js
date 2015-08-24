var gulp = require('gulp');
var wiredep = require('wiredep').stream;
gulp.task('wiredep', function() {
    gulp.src('./_layouts/base.md')
        .pipe(wiredep())
        .pipe(gulp.dest('./_layouts'));
});