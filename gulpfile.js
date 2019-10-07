var gulp        = require('gulp'), 
    sass        = require('gulp-sass'); 
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.{sass,scss}') 
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('app/css')) 
});

gulp.task('prefix', function(){ 
    return gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.{sass,scss}' , gulp.series('sass', 'prefix'));   
});

gulp.task('default', gulp.parallel('watch'));