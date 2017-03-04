var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css')
    imagemin = require('gulp-imagemin')
    clean = require('gulp-clean');

gulp.task('clean', function(){
	return gulp.src('dist', {read: false}).pipe(clean());
})

gulp.task('image',['clean'],function(){
	return gulp.src('img/**/*')
			.pipe(imagemin())
			.pipe(gulp.dest('dist/img'));
})

gulp.task('default',['image'], function () {
    return gulp.src('./*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

