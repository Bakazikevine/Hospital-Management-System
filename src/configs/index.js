const configs = {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGODB_URI ||'mongodb://localhost:27017/HSM',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;