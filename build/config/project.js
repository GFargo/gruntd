module.exports = {
	paths: {
		webroot: 'app/web',
		sass: 'app/lygo/static/<%= pkg.name %>/scss',
		css: 'app/lygo/static/<%= pkg.name %>/css',
		js: 'app/lygo/static/<%= pkg.name %>/js',
	},
	banner:
		'/*!\n' +
		' * <%= pkg.name %>\n' +
		' * <%= pkg.description %>\n' +
		' * <%= pkg.title %>\n' +
		' * <%= pkg.url %>\n' +
		' * @author <%= pkg.author %>\n' +
		' * @version <%= pkg.version %>\n' +
		' */\n\n\n',
};