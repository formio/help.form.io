var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var del = require('del');
var vinylPaths = require('vinyl-paths');

// Clean the dist folder.
gulp.task('clean', function() {
    return gulp.src('dist').pipe(vinylPaths(del));
});

// Wire the dependencies into index.html
gulp.task('wiredep', function() {
    return gulp.src('./index.html').pipe(wiredep()).pipe(gulp.dest('./'));
});

// Create the minified js and css files.
gulp.task('useref', ['clean'], function() {
    var assets = plugins.useref.assets();
    return gulp.src('./index.html')
        .pipe(assets)
        .pipe(plugins.if('*.js', plugins.uglify()))
        .pipe(plugins.if('*.css', plugins.minifyCss()))
        .pipe(assets.restore())
        .pipe(plugins.useref())
        .pipe(gulp.dest('dist'));
});

// Copy the fonts.
gulp.task('html', ['useref'], function() {
    return gulp.src('./assets/lib/bootstrap/fonts/*.*').pipe(gulp.dest('dist/fonts'));
});

// Define the buildnn task.
gulp.task('build', ['wiredep', 'html']);