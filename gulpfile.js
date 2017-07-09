var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    tinypng = require('gulp-tinypng-compress'),
    data = require('gulp-data'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    merge = require('merge2'),
    webserver = require('gulp-webserver');
    del = require('del');

//Paths
let siteDev     = "_dev/",
    sitePath    = "_test/",
    minifyPath  = "_min/";

//Output folder assignment
let test = false;

if (test) {
    sitePath = "_test/";
} else {
    sitePath = "_site/";
}

//errorLog
function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

//Json Files
var data = {
    //Modules
  //  "proverbios"    : require('http://localhost:8888/proverbios-backend/api/proverbios')
};

//Jade render
gulp.task('jade', function() {

  gulp.src(siteDev + 'jade/2-pages/**/*.*')
  .pipe(plumber())
  .pipe(jade())
  .pipe(gulp.dest(sitePath));
});

// Uglifies JS (minify JavaScript)
gulp.task('uglify', function(){
    gulp.src(siteDev + 'assets/js/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(siteDev + minifyPath + '/js'));
});

gulp.task('jsDev', function(){
    gulp.src(siteDev + 'assets/js/**/*.js')
    .pipe(plumber())
    .pipe(gulp.dest(siteDev + minifyPath + '/js'));
});

// Styles SASS - CSS
gulp.task('sass', function(){
    return sass(siteDev + 'assets/styles/main.scss', {
      style: 'compressed'})
      .on('error', errorLog)
      .pipe(prefix(['last 15 versions', '> 1%']))
      .pipe(gulp.dest(siteDev + minifyPath +'css'));
});

//Copy Images from Dev to Prod
gulp.task('images', function() {
   gulp.src(siteDev + 'assets/images/**/*')
   .pipe(gulp.dest(sitePath + 'assets/images'));
});

//Copy HTMLs, PDFs and other statics files besides images
gulp.task('statics', function() {
   gulp.src(siteDev + 'statics/**/*')
   //.pipe(htmlmin({collapseWhitespace: true}))
   .pipe(gulp.dest(sitePath));
});

// images + statics task
gulp.task('others', function(){
    gulp.start(['images', 'statics']);
});

//webserver
gulp.task('webserver', function() {
  gulp.src('_site')
    .pipe(webserver({
      fallback: 'index.html',
      directoryListing: {
        enable: true,
        path: '_site'
      },
      open: true,
      port: 8007
    }));
});

//clean
gulp.task('clean', function() {
  return del([
      sitePath,
      siteDev + minifyPath
  ], {force: true});
});

// Watch task
gulp.task('watch', function(){
    gulp.watch(siteDev + 'jade/**/*.jade', ['jade']);
		gulp.watch(siteDev +  minifyPath + '**/*', ['jade']);
    gulp.watch(siteDev + 'assets/js/*.js', ['uglify']);
    gulp.watch(siteDev + 'assets/styles/**/*.*', ['sass']);
    gulp.watch(siteDev + 'assets/images/**/*.*', ['images']);
});

gulp.task('default', function() {
    gulp.start(['uglify', 'jade', 'sass', 'images', 'watch']);
});

gulp.task('dev', function() {
    gulp.start(['jsDev', 'sass', 'images', 'watch']);
});
