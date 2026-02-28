import 'dotenv/config';
import express from 'express';
import pkg from 'pg';

import { UserRepository } from './infra/UserRepository.js';
import { CreateUser } from './application/CreateUser.js';
import { errorHandler } from './middleware/errorHandler.js';

const { Pool } = pkg;

const app = express();
app.use(express.json());

const dbPool = new Pool ({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: process.env.POSTGRES_DB,
    port: process.env.DATABASE_PORT,
});

const userRepository = new UserRepository(dbPool);
const createUserUseCase = new CreateUser(userRepository);



app.post('/user', async (req, res, next) => {
    console.log('Request received at /user');
    try {
        const result = await createUserUseCase.execute(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});
