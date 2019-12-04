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
                    'dist/savm-bc.min.js': manifest.milsym
                }
            }
        },
        clean: ['dist']
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-clean');

    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('clean', ['clean'])
}