var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    useref = require("gulp-useref"),
    gulpif = require("gulp-if"),
    clean = require("gulp-clean"),
    jshint = require("gulp-jshint");


gulp.task("jshint", function () {
    gulp.src("src/js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("default", function () {
    gulp.src("src/js/app.js")
        .pipe(gulp.dest("src/tpls/"));
});

gulp.task("cp-framework", function () {
    gulp.src("src/framework/**", {base: "./src"})
        .pipe(gulp.dest("dist"))
});

gulp.task("frame", function () {
    var bowerPath = "bower_components";
    gulp.src([bowerPath + "/angular*/angu*.js", bowerPath + "/bootstrap*/dist/*/**", bowerPath + "/angular-ui-router*/release/*.js"])
        .pipe(gulp.dest("src/framework"))
});

gulp.task("clean", function () {
    return gulp.src("dist")
        .pipe(clean({force: true}));
});

gulp.task("useref", ["clean"], function () {
    gulp.start("cp-framework");
    gulp.src("src/index.html")
        .pipe(useref())
        .pipe(gulpif("*.js", uglify()))
        .pipe(gulp.dest("dist"))
});