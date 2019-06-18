var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var del = require("del");

function browserTask() {
  browserSync({
    server: {baseDir: "./"},
    browser: ["chrome"]
  });
}
exports.browserTask = browserTask;

function bsReload() {
  browserSync.reload();
}
exports.bsReload = bsReload;

 function styles() {
  return gulp.src(['src/scss/**/*.scss'])
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(gulpif(!argv.prod,sourcemaps.init({loadMaps: true})))
        .pipe(sass())
        .pipe(gulpif(argv.prod,autoprefixer({cascade: false})))
        .pipe(gulpif(argv.prod,rename({suffix: '.min'})))
        .pipe(gulpif(argv.prod,cleanCSS()))
        .pipe(gulp.dest('dist/css/'))
        .pipe(gulpif(!argv.prod,sourcemaps.write('.')))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({stream:true}))
}
exports.styles = styles;

function html() {
  return gulp.src('./*.html')
    .pipe(browserSync.reload({stream:true}))
}
exports.html = html;

function clean() {
  return del(["./dist/css/"]);
}
exports.clean = clean;

function watchFiles() {
  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch("./*.html", html);
}

const build = gulp.series(styles);
const watch = gulp.parallel(watchFiles, browserTask);
exports.watch = watch;
exports.build = build;
exports.default = build;
