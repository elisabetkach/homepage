const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function (){
return gulp.src("src/sass*.+(less|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(browserSync.stream())
    .pipe(gulp.dest("src/css"));
})

gulp.task('watch', function(){
    gulp.watch("src/sass*.+(less|sass)", gulp.parallel('styles'))
    gulp.watch("src/*.html").on("change", browserSync.reload);
})
gulp.task('default',gulp.parallel('watch', 'server', 'styles'))