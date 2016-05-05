grunt.initConfig({
	bake: {
	    build: {
	        options: {
	            // Task-specific options go here.
	        },
	        files: {
	            // files go here, like so:
	            "app/index.html": "app/base.html"
	        }
	    },
	}
});

grunt.registerTask('server', function (target) {
    if (target === 'dist') {
        return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }
    grunt.task.run([
        'clean:server',
        'bake:build',
        'concurrent:server',
        'connect:livereload',
        'open',
        'watch'
    ]);
});

grunt.registerTask('build', [
    'clean:dist',
    'bake:build',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin'
]);