import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import 'dotenv';

const PORT = 3000;
const app = express();

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
		credentials: true,
	})
);
app.use(router);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
