// Include Gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint 		= require('gulp-jshint');
var less 		= require('gulp-less');
var concat 		= require('gulp-concat');
var livereload 	= require('gulp-livereload');	
var uglify 		= require('gulp-uglify');
var rename 		= require('gulp-rename');

gulp.task('mytask', function() {
	//do stuff
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Less
gulp.task('less', function() {  
  	return gulp.src('./app/styles/src/*.less')
	    .pipe(less())
	    .pipe(gulp.dest('./app/dist/css'));
});

// Concatenate & Minify JS
gulp.task('concat', function() {
    return gulp.src('./app/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./app/dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./app/scripts/*.js', ['lint', 'concat']);
    gulp.watch('./app/styles/src/*.less', ['less']);
});

// Default Task
gulp.task('mytask', ['lint', 'less', 'concat', 'watch']);

gulp.task('production', ['lint', 'less', 'concat']);

gulp.task('default', ['mytask']);