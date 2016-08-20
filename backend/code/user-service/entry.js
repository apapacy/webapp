require('../../../code/server entry')

global.log = require('./log')

require('./store/store').ready()
	.then(require('./web server'))
	.catch((error) =>
	{
		log.error(error)
		process.exit(1)
	})