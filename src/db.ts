import sql from "better-sqlite3";

const { DB_PATH } = process.env;

export const db = sql(DB_PATH);
