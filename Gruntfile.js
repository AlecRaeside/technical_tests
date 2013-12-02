module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
				build: ['build']
		},
		copy: {            
			build: {
				files: [{
					expand:true,
					cwd:"dev/",
					src:'**',
					dest: 'build/'
				}]
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: "dev/scss",
					cssDir: "dev/css"
				}
			}
		},
		useminPrepare: {
			html: ['dev/index.html'],
			options: {
				dest: 'build'
			}
		},
		usemin: {
			html: ['build/index.html'],	
			options: {
   				assetsDirs: 'build/css'
   			}
		},
		htmlmin: {
			build :{
				options: {
					removeComments:true,
					collapseWhitespace:true,
					removeAttributeQuotes:true
				},
				files: {
					"build/index.html":"build/index.html"
				}
			}
		},
		imagemin: {
			dynamic: {                       // Another target
				files: [{
					expand: true,                  // Enable dynamic expansion
					cwd: 'build/img',                   // Src matches are relative to this path
					src: ['*.{png,jpg,gif}'],   // Actual patterns to match
					dest: 'build/img/'                  // Destination path prefix
			  	}]
			}
		},
		watch: {
			files:["dev/scss/*.scss"],
			tasks: ["compass:dev"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks("grunt-usemin");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask('default', ["compass"]);
	grunt.registerTask('build', ['clean','compass','copy','useminPrepare','concat','uglify','cssmin','usemin','htmlmin','imagemin']);


}