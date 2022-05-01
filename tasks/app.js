const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const uglifycss = require("gulp-uglifycss");

function appHtml() {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

function appJs() {
  return gulp
    .src("src/**/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(uglify())
    .pipe(gulp.dest("build"));
}

function appCss() {
  return gulp
    .src("src/css/*.css")
    .pipe(uglifycss({ collapseWhitespace: true, uglyComments: false }))
    .pipe(gulp.dest("build/css"));
}
function appImgs() {
  return gulp.src("src/img/*.*").pipe(gulp.dest("build/img"));
}

gulp.task('appHtml',appHtml)
gulp.task('appCss',appCss)
gulp.task('appJs',appJs)
gulp.task('appImgs',appImgs)

module.exports = {
  appHtml,
  appCss,
  appJs,
  appImgs,
};
