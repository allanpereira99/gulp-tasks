const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function depsCss() {
  return gulp
    .src("src/deps/css/*.css")
    .pipe(uglifycss({ collapseWhitespace: true, uglyComments: false  }))
    .pipe(concat("deps.min.css"))
    .pipe(gulp.dest("build/css"));
}

function depsFonts() {
  return gulp
    .src("src/deps/fonts/**/*.ttf")
    .pipe(gulp.dest("build/fonts"));
}

module.exports = {
  depsCss,
  depsFonts,
};
