import mongoose from 'mongoose';
import { ENV_VARS } from './envVars.js';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGODB_URI);
        console.log('Mongo DB Connected: ' + conn.connection.host)
    } catch (error) {
        console.log('error to connecting to mongodb'+ error.message);
        process.exit(1); //1 nghi la error, 0 = success
    }
}