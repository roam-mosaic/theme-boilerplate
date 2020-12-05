import gulp from "gulp";
import sass from "gulp-sass";
import rename from "gulp-rename";
import cssBase64 from "gulp-css-base64";
import uglifycss from "gulp-uglifycss";

// export const build = () => {
//   return gulp
//     .src(["./scss/userstyle.scss"])
//     .pipe(sass().on("error", sass.logError))
//     .pipe(cssBase64({ baseDir: "./img", extensionsAllowed: [".png"] }))
//     .pipe(
//       uglifycss({
//         maxLineLen: 80,
//         cuteComments: true,
//         comments: "license",
//       })
//     )
//     .pipe(
//       rename({
//         basename: "roam-nexus",
//         suffix: ".user",
//       })
//     )
//     .pipe(gulp.dest("./dist"));
// };

/* Live Reload - Configured to work with Chrome Dev Tools Override Folder */
export const livereload = () => {
  return (
    gulp
      .src(["./scss/dev.scss"])
      .pipe(sass().on("error", sass.logError))
      .pipe(cssBase64({ baseDir: "./img", extensionsAllowed: [".png"] }))
      .pipe(uglifycss())
      // .pipe(inject());
      .pipe(
        rename({
          basename: "site",
          //suffix: ".user",
        })
      )
      .pipe(gulp.dest("./dev/roamresearch.com/assets/css/less-compiled"))
  );
};

export const watch = () => {
  gulp.watch(
    ["./scss/**/*.scss", "./scss/*.scss"],
    { ignoreInitial: false },
    livereload
  );
};
