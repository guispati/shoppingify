import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

const app = express();

app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mongoSanitize());

app.get('/api/v1', (request: Request, response: Response) => {
  	return response.send('Hello from backend!');
});

export default app;