var gulp = require('gulp');

gulp.task('default', function () {
    //default task code...
});

var paths = {};
paths.webroot = "wwwroot/";
paths.npmSource = "node_modules/";
paths.npmLib = paths.webroot + "lib_npm/";

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSource + 'systemjs/dist/**/*.js').pipe(gulp.dest(paths.npmLib + 'systemjs'));
});

gulp.task("copy-deps:angular2", function () {
    return gulp.src(paths.npmSource + '@angular/**/*.js').pipe(gulp.dest(paths.npmLib + 'angular'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmSource + 'rxjs/**/*.js').pipe(gulp.dest(paths.npmLib + 'rxjs'));
});

gulp.task("copy-deps:angular2-in-memory-web-api", function () {
    return gulp.src(paths.npmSource + 'angular2-in-memory-web-api/*.js').pipe(gulp.dest(paths.npmLib + 'angular2-in-memory-web-api'));
});

gulp.task("copy-deps", ["copy-deps:rxjs", 'copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:angular2-in-memory-web-api']);