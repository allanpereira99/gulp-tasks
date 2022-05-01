const gulp = require("gulp");
const webserver = require("gulp-webserver");
const watch = require('gulp-watch');


function monitorFiles() {
  watch('src/**/*.html',()=>gulp.series('appHtml')())
  watch('src/**/*.css',()=>gulp.series('appCss')())
  watch('src/**/*.js',()=>gulp.series('appJs')())
  watch('src/img/*.*',()=>gulp.series('appImgs')())
}

function server() {
  return gulp.src('build')
  .pipe(webserver({
    port:8080,
    open: true,
    livereload: true,
  }))
}

module.exports = {
  monitorFiles,
  server,
};
