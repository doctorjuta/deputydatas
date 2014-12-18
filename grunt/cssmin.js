module.exports = {
    my_target: {
        files: [{
            expand: true,
            cwd: 'src/styles/',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/style/',
            ext: '.min.css'
        }]
    }
};