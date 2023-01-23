const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connectionURL = process.env.MONGODB
        const cn = await mongoose.connect(connectionURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        cn.STATES.connected
        ? console.log('MongoDB conectado')
        : console.log('Error al conectar a MongoDB');

    } catch (error) {   
        console.log('error', error)
        process.exit(1)
    }
}

module.exports = {
    connectDB
}