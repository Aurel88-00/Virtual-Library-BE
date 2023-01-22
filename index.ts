import * as dotenv from 'dotenv';
dotenv.config()
import express, { Express } from 'express';
import authRouter from './routes/authRoutes';
import bookRouter from './routes/bookRoutes';
import cors from 'cors'
import mongoose from 'mongoose';
import { authMiddleware } from './middlewares/authMiddleware';


const app: Express = express();
const port = process.env.PORT

//Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Cors 
app.use(cors({ origin: '*' }))

//Router
app.use('/api/auth', authRouter)
app.use('/api' , authMiddleware ,  bookRouter);

async function bootstrap() {
    try {
        //DB Connection
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.sdeflpo.mongodb.net/?retryWrites=true&w=majority`,
            {
                dbName: `${process.env.DB_NAME}`,
                autoIndex: false,
                autoCreate: true,
            },
            () => {
                console.log('Database connected successfully!')
            }
        )
        //Start App
        app.listen(port, () => {
            console.log(`Server started listening on port: ${port}`)
        })
    } catch (error: any) {
        throw new Error(`${error.message}`)

    }
}

bootstrap()



