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
                    '../src/mapengine/worldwind/renderer/savm-bc.min.js': manifest.milsym
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
}