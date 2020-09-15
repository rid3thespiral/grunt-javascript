//Gruntfile.js
//Configure tasks and tells plugins where to find files
//Load plugins into the file (e.g uglify)
//Register tasks which need to be ran

module.exports = function(grunt){

    //config
    grunt.initConfig({
        //pass in options to plugins, references 
        //to files etc
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            }, 
            css: {
                src: ['css/*.js'],
                dest: 'build/styles.css'
            }
        },
        uglify: {
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify')

    //register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
}