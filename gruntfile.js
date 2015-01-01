module.exports = function(grunt) {
    
	// Project configuration.
	grunt.initConfig({

		//jshint
		jshint: {
			options: {
				"eqeqeq": true
			},
			files: {
				src: ['js-source/*.js']
			}
		},


		//uglify
		uglify: {
			 my_target: {
			      files: {
			        'js/minimal-form.min.js': ['js-source/*.js']
			      }
			  }
		    },


		//watch		
		watch: {
			  scripts: {
			    files: ['js-source/*.js', 'sass/*.scss'],
			    tasks: ['jshint', 'uglify', 'sass']
			  },
			},


		//sass		
		sass: {                              // Task
		    dist: {                            // Target			    
		      files: {                         // Dictionary of files
		        'css/3dvalidation.css': 'sass/3dvalidation.scss',
		        'css/ie.css': 'sass/ie.scss'
		      }
		    }
	    }


	});

	//load npm tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['jshint', 'uglify', 'sass']);

};