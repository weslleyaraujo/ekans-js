module.exports = function (grunt) {
	'use strict';

	var tasks = [
		'grunt-contrib-jshint',
		'grunt-contrib-compass',
		'grunt-contrib-watch',
		'grunt-contrib-jasmine',
		'grunt-concat-css'
	];

	grunt.initConfig({
		watch: {
			css: {
				files: [
					'assets/sass/*.sass',
					'assets/sass/**/*.sass',
				],
				tasks: [
					'compass:dev',
					'concat_css'
				]
			}
		},
		concat_css: {
			all: {
				src: [
					'assets/css/modules/*.css'
				],
				dest: 'assets/css/app.css'
			}
		},
		jshint: {
			all: [
				'Gruntfile.js'
			]
		},
		compass: {
			dev: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/css',
					imagesDir: 'assets/images',
					environment: 'development'
				}
			},
			prod: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/css',
					imagesDir: 'assets/images',
					outputStyle: 'compressed',
					noLineComments: true,
					environment: 'production'
				}
			}
		},
		jasmine: {
			src: [
				'lib/*.js'
			],
			options: {
				specs: 'spec/*.js'
			}
		},
	});

	tasks.forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint']);
};
