var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('min-css', function() {
  return gulp.src('source/css/fuling.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('source/css/min'));
});
gulp.task('watch', function () {
// 监听文件修改，当文件被修改则执行 css 任务
gulp.watch('source/css/fuling.css', ['min-css'])
});