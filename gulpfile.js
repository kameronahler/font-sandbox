// npm install --save-dev gulp, gulp-sass, gulp-postcss, autoprefixer, postcss-pxtorem, cssnano, gulp-uglify, gulp-concat, browser-sync

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    postcssautoprefixer = require('autoprefixer'),
    postcsspxtorem = require('postcss-pxtorem'),
    postcsscssnano = require('cssnano'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync')

gulp.task('sass', function() {
    var plugins = [
        postcssautoprefixer({
                browsers: ['last 4 versions', '> .25% in US']
            }),
        postcsspxtorem({
            rootValue:16,
            unitPrecision:5,
            propList:['*'],
            replace:false
            }),
        postcsscssnano({
            calc: false,
            colorMin: false,
            convertValues: false,
            discardUnused: false,
            zindex: false,
            reduceIdents: false,
            mergeIdents: false,
            minifySelectors: false,
            minifyFontValues: false,
            normalizeUrl: false,
            safe: true,
            mergeRules: true
            })
    ];

    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('js', function() {
    return gulp.src(['src/js/test.js','src/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', ['sass', 'js', 'browserSync'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('**/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('default', function() {
    gulp.start('sass');
    gulp.start('js');
});