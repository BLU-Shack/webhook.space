class Check {
	constructor() {
		throw new Error('Not to be initiated.');
	}

	static edit(options) {
		if (options.port && typeof options.port !== 'number') throw new TypeError('options.port must be a number.');
		if (options.path && typeof options.path !== 'string') throw new TypeError('options.path must be a string.');
		if (!options.path.startsWith('/')) throw new SyntaxError('options.path must start with \'/\' ');
		if (options.token && typeof options.token !== 'string') throw new TypeError('options.token must be a string.');
		if (options.normal && typeof options.normal !== 'boolean') throw new TypeError('options.normal must be boolean.');
		return options;
	}
}

module.exports = Check;