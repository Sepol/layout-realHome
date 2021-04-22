module.exports = function () {
  $.gulp.task('css', function () {
    return $.gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
      ])
      .pipe($.gp.concat('_libs.scss'))
      .pipe($.gulp.dest('sass'))
      .pipe($.browserSync.reload({
        stream: true
      }))
  });
  $.gulp.task('sass', function () {
    return $.gulp.src('sass/style.scss')
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions']
      }))
      .pipe($.gp.csso())
      .pipe($.gp.rename('style.min.css'))
      .pipe($.gp.sourcemaps.write(''))
      .pipe($.gulp.dest('build/css'))
      .pipe($.browserSync.stream());
  });
};