//gọi các plugin cần thiết
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    compass = require('gulp-compass');

// khai báo các đường dẫn và file sẽ dùng
var paths = {
    css: [
        './bower_components/pace/themes/blue/pace-theme-big-counter.css',
        './bower_components/fullpage.js/jquery.fullPage.css',
        './css/*.css'
    ],
    js: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/jquery.slimscroll/jquery.slimscroll.min.js',
        './bower_components/fullpage.js/vendors/jquery.easings.min.js',
        './bower_components/fullpage.js/jquery.fullPage.min.js',
        './bower_components/pace/pace.min.js',
        './js/freyrus.js'
    ],
    sass: [
        './sass/*.scss'
    ]
};

//tạo task cho js
gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(uglify())
        .pipe(concat('freyrus.min.js'))
        .pipe(gulp.dest('./build/js'));
});

//tạo task cho css
gulp.task('css', function() {
    gulp.src(paths.css)
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css'));
});

//tạo task cho compass
gulp.task('compass', function() {
    gulp.src(paths.sass)
        .pipe(compass({
            css: 'css',
            sass: 'sass',
            image: 'images'
        }))
        .on('error', function(err) {
            console.log(err);
            // Would like to catch the error here
        })
        .pipe(gulp.dest('./css'));
});

//tạo task watch để theo dõi các file nếu file thay đổi thì thực hiện các task liên quan
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['compass']);
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.js, ['js']);
});

//tạo task default : là các việc sẽ làm tuần tự khi ta chỉ dùng lệnh gulp ko kèm option task nào
gulp.task('default', [
    'compass',
    'css',
    'js',
    'watch'
]);
