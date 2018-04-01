module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
    
      less: {
        development: {
          options: {
            paths: ["less/"]
          },
          files: {
            "src/assets/css/master.css": "src/assets/css/master.less",
            "src/app/footer/footer.component.min.css": "src/app/footer/footer.component.less",
            "src/app/navbar/navbar.component.min.css": "src/app/navbar/navbar.component.less"
          }
        }
      },
    
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        },
      },
      
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['less', 'watch']);
  
  };