var manifest = require('./manifest');

module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                beautify: true,
                sourceMap: true,
                mangle: false,
                screwIE8: true,
                sourceMapIncludeSources: true,
                compress: false
            },
            milsym: {
                files: {
                    '../dist/savm-bc.min.js': manifest.milsym
                }
            }
        },
        copy: {
            fonts: {
                files: [
                    {expand: true, cwd: 'web/js/src', src: 'fonts/*', dest: '../dist/resources'},
                    {expand: true, cwd: 'web/js/src', src: 'renderer.css', dest:'../dist'}
                ]
            }
        },
        clean: ['dist']
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'copy']);
    grunt.registerTask('clean', ['clean'])
}