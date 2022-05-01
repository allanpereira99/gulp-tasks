const { series, parallel } = require("gulp");
const gulp = require("gulp");
const { appHtml, appCss, appJs, appImgs } = require("./tasks/app");
const { monitorFiles, server } = require("./tasks/server");
const { depsCss, depsFonts } = require("./tasks/deps");

module.exports.default = series(
  parallel(series(appHtml, appCss, appJs, appImgs), series(depsCss, depsFonts)),
  server,
  monitorFiles
);
