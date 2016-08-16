var gulp = require("gulp");

gulp.task("default", function () {
    gulp.src("js/app.js")
        .pipe(gulp.dest("tpls/"));
});