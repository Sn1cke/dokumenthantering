import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "documents",
});

async function fetchData() {
  try {
    const [rows, fields] = await db.query("SELECT * FROM documents");
    return rows;
    console.log(rows);
  } catch (err) {
    console.error("Error:", err);
  }
}

export default fetchData;
