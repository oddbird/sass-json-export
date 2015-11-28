module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scsslint');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({
    dir : {
      src : 'stylesheets',
    },
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      options: {
        style: 'expanded',
        loadPath: ['./node_modules/bootcamp/dist', './<%= dir.src %>']
      },
      all: {
        files: {
          './tmp/all.css': './test/test.scss'
        }
      },
      encoder: {
        files: {
          './tmp/encode.css': './test/encode/test.scss'
        }
      }
    },

    scsslint : {
      options : {
        excludeLinter : [
          'ColorKeyword',
          'NameFormat',
          'StringQuotes',
          'SpaceAfterComma',
          'Comment',
          'PropertySpelling'
        ]
      },
      all: {
        src : ['<%= dir.src %>/**/*']
      },
      encoder: {
        src : ['<%= dir.src %>/encoder/**/*']
      }
    },

    // Bootcamp
    bootcamp: {
      all: {
        files: {
          src: ['./tmp/all.css']
        }
      },
      encoder:{
        files: {
          src: ['./tmp/encode.css']
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
      },
      encoder: {
        files: [
                './test/encode/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test:encode']
      }
    }
  });

  // Tasks
  grunt.registerTask('test', function (arg){
    arg = arg || "all";

    var tasks = ['scsslint', 'sass', 'bootcamp'].map(function (item){
      return item + ":" + arg;
    });


    grunt.task.run(tasks);
  });
  grunt.registerTask('dev', function (arg ){
    arg = arg || "all";

    var tasks = ['test', 'watch'].map(function (item){
      return item + ":" + arg;
    });

    grunt.task.run(tasks);
  });
  grunt.registerTask('build', ['test:all', 'concat']);
};
