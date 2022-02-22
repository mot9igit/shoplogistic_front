const { src, dest, watch, parallel, series }  = require('gulp');

const scss          = require('gulp-sass');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync').create();
const uglify        = require('gulp-uglify-es').default;
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const del           = require('del');
const file_include 	= require('gulp-file-include');

function browsersync() {
  browserSync.init({
    server : {
      baseDir: 'app/'
    }
  });
}

function cleanDist() {
  return del('dist')
}

function images() {
  return src('app/images/**/*')
    .pipe(imagemin(
      [
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]
    ))
    .pipe(dest('dist/images'))
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'app/libs/owlcarousel2/dist/owl.carousel.min.js',
    'app/libs/maskedinput/dist/jquery.maskedinput.min.js',
    'app/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function fileinclude() {
  return src(['app/files/*.html'])
      .pipe(file_include({
          prefix: '@@',
          basepath: '@file'
      }))
      .pipe(dest('app'));
};


function styles() {
  return src('app/scss/style.scss')
      .pipe(scss({outputStyle: 'compressed'}))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
      }))
      .pipe(dest('app/css'))
      .pipe(browserSync.stream())
}

function styles_big() {
  return src('app/scss/style.scss')
      .pipe(scss({outputStyle: 'expanded'}))
      .pipe(concat('style.css'))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
      }))
      .pipe(dest('app/css'))
      .pipe(browserSync.stream())
}

function build() {
  return src([
    'app/css/style.min.css',
    'app/css/style.css',
    'app/fonts/**/*',
    'app/js/main.min.js',
    'app/*.html',
    'app/libs/**/*',
    'app/video/**/*'
  ], {base: 'app'})
    .pipe(dest('dist'))
}

function watching() {
  watch(['app/files/**/*.html'], fileinclude);
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/scss/**/*.scss'], styles_big);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.styles_big = styles_big;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;


exports.build = series(cleanDist, styles, styles_big, images, build);
exports.default = parallel(styles , styles_big, scripts , fileinclude, browsersync, watching);


