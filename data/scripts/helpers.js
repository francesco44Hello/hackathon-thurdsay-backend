import { pool } from "../index.js";

export async function createAllTables() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS candidates (
      candidate_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      first_name TEXT,
      last_name TEXT,
      start_date DATE DEFAULT 2023-01-01, 
      end_date DATE DEFAULT 2023-12-31, 
      Java BOOLEAN,
      AWS BOOLEAN,
      JavaScript BOOLEAN,
      Python BOOLEAN,
      SQL BOOLEAN
   );

   INSERT INTO candidates
      (first_name, last_name, start_date, end_date, Java, AWS, JavaScript, Python, SQL)
   VALUES
   ('Martha', 'Bennett', '2023-01-01', '2023-12-31', TRUE, FALSE, TRUE, FALSE, TRUE),
   ('Ashraf', 'Abdelrahman', '2023-01-01', '2023-12-31', FALSE, TRUE, TRUE, TRUE, FALSE), 
   ('Francesco', 'Longo', '2023-01-01', '2023-12-31', TRUE, TRUE, FALSE, FALSE, TRUE),
   ('Emily', 'Pritchard', '2023-01-01', '2023-12-31', FALSE, FALSE, TRUE, TRUE, TRUE);
   
   CREATE TABLE IF NOT EXISTS jobs (
            job_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            company_name TEXT,
            start_date DATE,
            end_date DATE,
            Java BOOLEAN,
            AWS BOOLEAN,
            JavaScript BOOLEAN,
            Python BOOLEAN,
            SQL BOOLEAN
          );`
  );
}

export async function dropAllTables() {
  return await pool.query(
    "DROP TABLE IF EXISTS candidates; DROP TABLE IF EXISTS jobs"
  );
}

export async function resetAllTables() {
  const dropped = await dropAllTables();
  const created = await createAllTables();
  return [dropped, created];
}
