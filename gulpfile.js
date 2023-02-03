'use strict';
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var cleanCSS = require("gulp-clean-css");
sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/style/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/*/*.scss', gulp.series('sass'));
});
