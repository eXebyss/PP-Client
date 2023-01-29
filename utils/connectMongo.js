import mongoose from 'mongoose'

const connection = {} /* Creating connection object. */

const connectMongo = async () => {
	/* Check if we have connection to our database. */
	if (connection.isConnected) {
		return
	}

	/* Connecting to our database. */
	const db = await mongoose.connect(process.env.MONGODB_URI)

	connection.isConnected = db.connections[0].readyState
}

export default connectMongo
