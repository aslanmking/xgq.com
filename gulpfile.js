const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sprite = require('gulp.spritesmith');
const concat = require('gulp-concat');
// const path = require('path');
// const less = require('gulp-less');

gulp.task('htmlmin', () => {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
});


gulp.task('cssmin', () => {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('jsmin', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('imgmin', () => {
    return gulp.src('./src/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});


gulp.task('sprite', () => {
    return gulp.src('./src/img/*')
        .pipe(sprite({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }))
        .pipe(gulp.dest('./src/css'));
});


gulp.task('concatjs', () => {
    return gulp.src(['./src/js/base.js', './src/js/index.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'));
});
