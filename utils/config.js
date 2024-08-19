require('dotenv').config()

const mongoURL =
	process.env.NODE_ENV === 'test'
		? process.env.TEST_MONGODB_URI
		: process.env.MONGODB_URI
const PORT = process.env.PORT || 5000
module.exports = { mongoURL, PORT }
