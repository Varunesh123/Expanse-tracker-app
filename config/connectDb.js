import mongoose from 'mongoose';

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server is running on ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}

export default connectDb;
