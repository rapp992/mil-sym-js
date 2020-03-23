var manifest = require('./manifest');

module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                sourceMap: true,
                mangle: false,
                screwIE8: true,
                sourceMapIncludeSources: true,
                compress: false
            },
            milsym: {
                files: {
                    '../dist/mil-sym-js/dist/savm-bc.min.js': manifest.milsym
                }
            }
        },
        copy: {
            fonts: {
                files: [
                    {expand: true, cwd: 'web/js/src', src: 'fonts/*', dest: '../dist/mil-sym-js/web/js/src'},
                    {expand: true, cwd: 'web/js/src', src: 'renderer.css', dest:'../dist/mil-sym-js/web/js/src'}
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