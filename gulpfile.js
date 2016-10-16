/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var npmSrc = './node_modules/';
var npmLibs = './src/scripts/lib/';

gulp.task('src-bootstrap',
    function(){
        return gulp.src(npmSrc + 'bootstrap/**/*.{js,css}')
            .pipe(gulp.dest(npmLibs + 'bootstrap'));
    });

gulp.task('src-jquery',
    function(){
        return gulp.src(npmSrc + 'jquery/**/*.js')
            .pipe(gulp.dest(npmLibs + 'jquery'));
    });

// gulp.task('copy-angular',
//     function () {
//         return gulp.src(npmSrc + '@angular/**/*.js')
//             .pipe(gulp.dest(npmLibs + '@angular/'));
//     });
// gulp.task('copy-angular-in-memory-web-api',
//     function () {
//         return gulp.src(npmSrc + 'angular-in-memory-web-api/**/*.js')
//             .pipe(gulp.dest(npmLibs + 'angular-in-memory-web-api/'));
//     });
// gulp.task('copy-rxjs',
//     function () {
//         return gulp.src(npmSrc + 'rxjs/**/*.js')
//             .pipe(gulp.dest(npmLibs + 'rxjs/'));
//     });
// gulp.task('copy-angular2-datatable',
//     function () {
//         return gulp.src(npmSrc + 'angular2-datatable/**/*.js')
//             .pipe(gulp.dest(npmLibs + 'angular2-datatable/'));
//     });
// gulp.task('copy-font-awesome',
//     function () {
//         return gulp.src(npmSrc + 'font-awesome/**/*.{js,css,eot,svg,ttf,woff,woff2,otf,map}')
//             .pipe(gulp.dest(npmLibs + 'font-awesome/'));
//     });
// gulp.task('copy-zone-js',
//     function () {
//         return gulp.src(npmSrc + 'zone.js/**/*.js')
//             .pipe(gulp.dest(npmLibs + 'zone.js/'));
//     });

// gulp.task('copy-systemjs',
//     function () {
//         return gulp.src(npmSrc + 'systemjs/**/*.js')
//             .pipe(gulp.dest(npmLibs + 'systemjs/'));
//     });

// gulp.task('copy-reflect-metadata',
//     function () {
//         return gulp.src(npmSrc + 'reflect-metadata/**/*.js')
//             .pipe(gulp.dest(npmLibs + 'reflect-metadata/'));
//     });

// gulp.task('copy-core-js',
//     function () {
//         return gulp.src(npmSrc + 'core-js/**/*.js')
//             .pipe(gulp.dest(npmLibs + 'core-js/'));
//     });

// gulp.task('copy-npm-ng-deps',
// [
//     'copy-angular', 'copy-rxjs', 'copy-angular-in-memory-web-api', 'copy-font-awesome', 'copy-zone-js'/*, 'copy-angular2-datatable',
//      'copy-ng2-bootstrap'*/
//     /*'copy-angular', 'copy-systemjs', 'copy-core-js', 'copy-zone-js', 'copy-reflect-metadata', 'copy-rxjs',
//     'copy-angular2-in-memory-web-api'*/
// ]);

gulp.task('default', ['src-bootstrap', 'sr-']);