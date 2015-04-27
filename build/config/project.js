module.exports = {
	paths: {
		webroot: 'app/web',
		sass: 'app/web/static/mail/scss',
		css: 'app/web/static/mail/css',
		js: 'app/web/static/mail/js',
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