// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();

var source = [
		'app/**/*.js', 
		"!app/vendor/**/*.*"
	];

gulp.task('webserver', function() {
	return gulp
		.src('app')
		.pipe(plug.webserver({
			livereload: true,
			directoryListing: true,
			open: "http://localhost:8000/index.html"
	}));
});

gulp.task("watch", function() {
	return gulp
		.watch(source);
});

// The default task is 'webserver'
gulp.task("default", ["webserver", "watch"]);