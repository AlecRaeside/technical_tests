module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dev: {
				options: {
					sassDir: "dev/scss",
					cssDir: "dev/css"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-usemin");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask('default', ["compass"]);

}