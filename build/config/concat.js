module.exports = {
	options: {
        banner: '<%= project.banner %>',
        stripBanners: false,
        separator: ';'
	},
	dist: {
	  src: ['<%= project.paths.js %>/src/*.js'],
	  dest: '<%= project.paths.js %>/<%= pkg.name %>_scripts.js'
	},
};