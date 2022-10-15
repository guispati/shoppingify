import mongoose from 'mongoose';
import "dotenv/config";
import app from './app';

// process.on("uncaughtException", err => {
//     console.log('UNCAUGHT EXCEPTION! Shutting down...');
//     console.log(err.name, err.message);
//     process.exit(1);
// });

const port = process.env.PORT || 3333;
const DB = process.env.DATABASE!.replace('<PASSWORD>', process.env.DATABASE_PASSWORD!);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

// process.on("unhandledRejection", (err: ErrorEvent) => {
//     console.log('UNHANDLER REJECTION! Shutting down...');
//     console.log(err.name, err.message);
//     server.close(() => {
//         process.exit(1);
//     });
// });