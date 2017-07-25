'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './development/scss/styles.scss';
var output = './public/css';
var inputJs = './development/js/*.js';
var outputJs = './public/js';

var sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// -------------------------------


// default gulp task
gulp.task('default', function () {

    // watch for JS changes
    gulp.watch(input, function () {
        gulp.run('sass');
    });

    // watch for SCSS changes
    gulp.watch(inputJs, function () {
        gulp.run('build-js');
    });
});

// -------------------------------

gulp.task('sass', function () {
    return gulp
    // Find all `.scss` files from the `stylesheets/` folder
        .src(input)
        // Run Sass on those files
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(concat('samen.css'))
        .pipe(sourcemaps.write('./'))

        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});
// -------------------------------

gulp.task('build-js', function () {
    return gulp.src(inputJs)
        .pipe(sourcemaps.init())
        .pipe(concat('samen.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputJs));
});



