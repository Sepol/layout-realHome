module.exports = function () {
  $.gulp.task('default', $.gulp.series('clean', 'copy', 'css', 'sass', 'scripts', 'images', 'exportWebP', 'svg'));
};