module.exports = function (grunt) {
    
    grunt.initConfig({
        clean: {
            dist: ["dist/"]
        },
        //jshint: {
        //    all: ['Gruntfile.js', 'WebContent/kw-directive/**/*.js', 'WebContent/modules/**/*.js']
        //},
        concat: {
            dist:{
                src: ['src/js/app/**/*.js'],
                dest: 'dist/js/scripts.js'
            }
        },
        uglify: {
            dist: {
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            }
        },
        copy: {
            dist: {
                expand: true,
                cwd: 'src',
                src: ['js/**/*.js', '!js/**/app/**', 'css/**/*.css', 'fonts/**/*', 'img/**/*', 'pages/**/*.html', 'index.html'],
                dest: 'dist/'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('default', [
        'clean',
        //'jshint',
        'concat',
        'uglify',
        'copy'
    ]);
};
