module.exports = {
    options: {
        limit: 3
    },
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'uglify'
    ],
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'bower_concat',
        'cssmin',
        'uglify'
    ],
    imgFirst: [
        'imagemin'
    ]
};