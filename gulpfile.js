var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var Q = require("q"),
    path = require('path') ,
    bowerFiles = require('gulp-bower-files'),
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish-ex'),
    uglify = require('gulp-uglifyjs'),
    clean = require('gulp-clean'),
    livereload = require('gulp-livereload'),
    inject = require("gulp-inject"),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin'),
    runSequence = require('run-sequence'),
    mergestream = require('merge-stream'),
    gulpFilter = require('gulp-filter');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});


var cfg = require('./build.config.js');

gulp.task('app:js:build', function () {
    logHighlight("Copy js files");
    var src = cfg.src.js;
    return tsResult = gulp.src(src).pipe(concat('app.test.concat.min.js')).pipe(gulp.dest('./'));
});


gulp.task('app:build', function () {
    var deferred = Q.defer();

    runSequence(

        'app:js:build',

        function () {
            deferred.resolve();
        });

    return deferred.promise;
});


gulp.task('watch', ['app:build'], function () {
    var server = livereload();


    // .js files
    gulp.watch('client/Ang/**/*.js', ['app:js:build']);


    var buildDir = 'app.test.min.js';
    gulp.watch(buildDir).on('change', function (file) {
        server.changed(file.path);
    });
});

function logHighlight(message) {
    gutil.log(gutil.colors.black.bgWhite(message));
};
