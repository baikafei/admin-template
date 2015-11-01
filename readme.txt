Project name: admin-template
Version: 1.0.0

[ DIRECTORY STRUCTURE ]

/root
|_css
|_less
|_js
	|_app				AngularJS Files
	|_modules			JS Files: JQuery, bootstrap, etc
		|_adminlte
	|_plugins
|_img
|_fonts
|_pages
|_index.html

[ WORKING WITH NODEJS ]

	Create package.json file
		# npm init

	Install the package
		# npm install <package-name> --save-dev
		-g for global
	
	Install grunt-cli
		# npm install -g grount-cli
	
	Install "connect and "serve-static" for a small server
		# npm install connect
		# npm install serve-static
		Create server.js
		Run web server
		# node server.js
	
	package-name:
	- grunt-contrib-clean		: clean directory
	- grunt-contrib-jshint		: validation
	- grunt-contrib-concat		: concatenation files
	- grunt-contrib-uglify		: minifying files
	- grunt-contrib-copy		: copying files
	
	- grunt-karma				: testing
	- grunt-contrib-connect		: web server

[ WORKING WITH GRUNT ]

	CREATE Gruntfile.js

	EXECUTE THE GRUNT TASK OR WORKFLOW

	# grunt <name of the task or workflow>
		ex: run only the clean task
		# grunt clean

		ex: call a specific task
		# grunt concat:dist
		# grunt concat:js

[ INSTALLING PACKAGES: BOWER ]
