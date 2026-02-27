export class UserRepository {
    // recebe a conexão com o banco
    constructor(dbPool) {
        this.dbPool = dbPool;
    }


    async save(user) {
        const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
        const result = await this.dbPool.query(query, [user.name, user.email]);
        return result.rows;
    }

    async findAll() {
        const query = 'SELECT * FROM users ORDER BY id DESC';
        const result = await this.dbPool.query(query);
        return result.rows;
    }
}
