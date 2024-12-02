import express from 'express';
import loggerMiddleware from './middlewares/logger.middleware.js';
import errorMiddleware from './middlewares/error.middleware.js';
import postRoutes from './routes/post.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './db.js';

const app = express();

connectDB();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.use(errorMiddleware);

app.listen(8003, () => {
    console.log('Server is running on http://localhost:8003');
});
