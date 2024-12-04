import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

connectDb();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoute);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is connected at port ${PORT}`);
});