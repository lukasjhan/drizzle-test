import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  uri: "mysql://root:root@localhost:3306/test",
});

export const db = drizzle(pool);
