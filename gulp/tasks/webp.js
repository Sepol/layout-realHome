module.exports = function () {
  $.gulp.task("exportWebP", function () {
    return $.gulp.src('build/img/**/*.{jpg,jpeg,png,gif,ico}')
      .pipe($.gp.imagemin({
        webp: {
          quality: 100
        }
      }))
      .pipe($.gp.extReplace(".webp"))
      .pipe($.gulp.dest('build/img'));
  });
};


