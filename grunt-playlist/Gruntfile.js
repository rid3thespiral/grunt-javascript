//Gruntfile.js
//Configure tasks and tells plugins where to find files
//Load plugins into the file (e.g uglify)
//Register tasks which need to be ran

module.exports = function(grunt){

    //config
    grunt.initConfig({
        //pass in options to plugins, references 
        //to files etc

    });

    //load plugins
    grunt.loadNpmTasks('')

    //register tasks
    grunt.registerTask('run', () => {
        console.log('I am running');
    });

    grunt.registerTask('sleep', () => {
        console.log('I am sleeping');
    });

    grunt.registerTask('all', ['sleep', 'run']);

}