import { ConflictError } from "../domain/ConflictError.js";

export class UserRepository {
    constructor(dbPool) {
        this.dbPool = dbPool;
    }


    async save(user) {
    try {
        const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
        const values = [user.name, user.email];
        const result = await this.dbPool.query(query, values);
        return result.rows;
    } catch (error) {
        if (error.code === '23505') {
            throw new ConflictError('Email already exists');
        }
        throw error;
    }
}


    async findAll() {
        const query = 'SELECT * FROM users ORDER BY id DESC';
        const result = await this.dbPool.query(query);
        return result.rows;
        }
    }
