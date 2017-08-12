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
					collapseWhitespace: true,
					removeComments: true
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
				tasks: ['cssmin:build']
			},
			html: {
				files: 'source/*.html',
				tasks: ['htmlmin:build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['htmlmin:build', 'cssmin:build', 'copy', 'finalize-build']);

	grunt.registerTask('default', ['clean', 'build', 'browserSync', 'watch']);

	grunt.registerTask('finalize-build', 'Apply finishing touches to complete the build.',  function() {

		var css;
		var cssHeader;
		var cssHeaderMatches;
		var cssHeaderRegExp = /(@charset "[^"]*";)[\s\S]*?\*\//;

		var html;

		// HTML replacement

		grunt.log.writeln('Replacing placeholder.css with placeholder.min.css in build/index.html.');

		html = grunt.file.read('build/index.html');

		html = html.replace('placeholder.css', 'placeholder.min.css');

		grunt.file.write('build/index.html', html);

		// CSS header restoration

		css = grunt.file.read('source/_assets/styles/placeholder.css');

		cssHeaderMatches = cssHeaderRegExp.exec(css);

		if (cssHeaderMatches !== null) {

			grunt.log.writeln('Restoring header in placeholder.min.css.');

			css = grunt.file.read('build/_assets/styles/placeholder.min.css');

			css = css.replace(cssHeaderMatches[1], cssHeaderMatches[0] + '\n');

			grunt.file.write('build/_assets/styles/placeholder.min.css', css);
		}

		else {

			grunt.log.writeln('CSS header not found. Unable to restore.');
		}
	});
};