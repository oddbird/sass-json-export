module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('bootcamp');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-lint');

  // Grunt Tasks
  grunt.initConfig({
    dir : {
      src : 'stylesheets',
    },
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      options: {
        outputStyle: 'expanded',
        includePaths: ['./node_modules/bootcamp/dist', './<%= dir.src %>']
      },
      all: {
        files: {
          './tmp/all.css': './test/test.scss'
        }
      }
    },

    sasslint : {
      all: {
        src : ['<%= dir.src %>/**/*']
      }
    },

    // Bootcamp
    bootcamp: {
      all: {
        files: {
          src: ['./tmp/all.css']
        }
      }
    },

    // Watch
    watch: {
      all: {
        files: [
                './test/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test']
      }
    }
  });

  // Tasks
  grunt.registerTask('test', ['sasslint', 'sass', 'bootcamp']);
  grunt.registerTask('dev', ['test', 'watch']);
  grunt.registerTask('default', ['test']);
};
