import { Pool } from 'pg';

console.log('process.env.DB_CONN', process.env.DB_CONN);

const pool = new Pool({
    connectionString: process.env.DB_CONN,
    max: process.env.DB_MAX_CONNECTIONS || 20,
    idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT || 30000,
    connectionTimeoutMillis: process.env.DB_CONNECTION_TIMEOUT || 2000
});

const DBClient = {
    query: (q, values, callback) => {
        return pool.query(q, values, callback);
    }
};
export { DBClient };