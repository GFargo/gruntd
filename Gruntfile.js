module.exports = function(grunt) {

  /*****************************************************

    Lycos Mail

    Packages:
      -> grunt-uncss
      -> grunt-csscss
      -> grunt-contrib-uglify
      -> grunt-contrib-jshint
      -> grunt-contrib-qunit
      -> grunt-contrib-watch
      -> grunt-contrib-concat

    Processes:

  *****************************************************/

  'use strict';

  // require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  /*****************************************************

    Grunt Init Config

  *****************************************************/
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Project Config
    project: require('./build/config/project'),

    /*
      CSS

      Sass - https://github.com/gruntjs/grunt-contrib-sass
      CSSCSS - Used to locate dupe css selectors
      Autoprefixer - Used to Automatically Insert Browser Prefixes https://github.com/nDmitry/grunt-autoprefixer
      UNCSS - Used to locate unused CSS rules
    */
    sass: require('./build/config/sass'),
    csscss: require('./build/config/csscss'),
    autoprefixer: require('./build/config/autoprefixer'),
    uncss: require('./build/config/uncss'),


    /*
      JS

      concat - Used to Combine Multiple Files into One
      uglify - Transforming the code into an "unreadable" form to be used in live environments - mangles variables
      jshint - Lint Javascript
      qunit -  Unit Testing
    */
    concat: require('./build/config/concat'),
    uglify: require('./build/config/uglify'),
    jshint: require('./build/config/jshint'),
    qunit: require('./build/config/qunit'),


    // Watch Config
    watch: require('./build/config/watch.js'),

  });



  /*****************************************************

    Core Tasks

  *****************************************************/

  grunt.loadNpmTasks('grunt-contrib-sass');

  /*****************************************************

    Dev Tasks

  *****************************************************/

  // Default Task
  grunt.registerTask('default', [], function(){
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.task.run('sass:dev','js-dist');
  });

  // Watch CSS Files
  grunt.registerTask('watch-css', [], function() {
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.task.run('watch:styles');
  });

  // Global Watch
  grunt.registerTask('watch', [], function() {
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.task.run('watch:all');
  });


  // Javascript
  grunt.registerTask('js-dist', [], function(){
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.task.run('jshint:all', 'concat');
  });


  /*****************************************************

    Dist Tasks

  *****************************************************/


  // Check Files
  grunt.registerTask('check', 'Checks for Redundancies / Autprefixes', function() {
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-csscss');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.task.run('sass:dev','csscss:check','autoprefixer:check');
  });

  // Final Build
  grunt.registerTask('dist', 'Compiles all files for live environment', function() {
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.task.run('sass:dist','autoprefixer:dist', 'js-dist');
  });


};

