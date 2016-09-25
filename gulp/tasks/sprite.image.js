'use strict'

module.exports = function(){
    $.gulp.task('sprite:image', function () {
        var spriteData = $.gulp.src('./source/sprite/*.{png,gif}')
            .pipe($.gp.spritesmith({
            imgName: 'sprite.svg',
            cssName: 'sprite.css'
        }));

    spriteData.img
        .pipe($.gulp.dest($.config.root +'/assets/img'));

    spriteData.css
        .pipe($.gp.csso())
        .pipe($.gulp.dest($.config.root +'/assets/css'));

        return spriteData;
    })
};