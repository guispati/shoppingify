import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import userRouter from './routes/userRoutes';

const app = express();

app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mongoSanitize());

// app.get('/api/v1', (request: Request, response: Response) => {
//   	return response.send('Hello from backend!');
// });

app.use('/api/v1/users', userRouter);

// app.all('*', (req, res, next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

export default app;