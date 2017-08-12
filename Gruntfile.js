/* jshint node: true, esversion: 6 */

module.exports = function(grunt) {

	grunt.initConfig({

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'build/*.html',
						'build/_assets/styles/*.css'
					]
				},
				options: {
					watchTask: true,
					server: 'build'
				}
			}
		},

		clean: {
			build: {
				src: 'build'
			}
		},

		concat: {
			css: {
				nonull: true,
				src: [
					'source/_assets/styles/_file-header.css',
					'build/_assets/styles/placeholder.min.css'
				],
				dest: 'build/_assets/styles/placeholder.min.css'
			}
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'source/',
						src: ['_assets/images/**'],
						dest: 'build/'
					}
				]
			}
		},

		cssmin: {
			build: {
				files: {
					'build/_assets/styles/placeholder.min.css': [
						'source/_assets/styles/placeholder.css'
					]
				}
			}
		},

		htmlmin: {
			build: {
				options: {
					collapseWhitespace: true
				},
				files: [
					{
						expand: true,
						cwd: 'source/',
						src: ['*.html'],
						dest: 'build/'
					}
				]
			}
		},

		watch: {
			css: {
				files: 'source/_assets/styles/*.css',
				tasks: ['cssmin:build', 'concat:css']
			},
			css: {
				files: '*.html',
				tasks: ['htmlmin:build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['htmlmin:build', 'cssmin:build', 'concat:css', 'copy']);

	grunt.registerTask('default', ['clean', 'build', 'browserSync', 'watch']);
};