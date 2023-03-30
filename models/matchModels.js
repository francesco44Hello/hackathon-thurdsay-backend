import { pool } from "../data/index.js";

export async function getAllMatchingCandidates(job) {
  const sqlQuery =
    "SELECT * FROM candidates WHERE start_date BETWEEN ($1) AND ($2) AND aws=($3) AND sql=($4) AND java=($5) AND javascript=($6) AND python=($7))";
  const parameterValues = [
    job.start_date,
    job.end_date,
    job.aws,
    job.sql,
    job.java,
    job.javascript,
    job.python,
  ];
  const result = await pool.query(sqlQuery, parameterValues);
  const candidates = result.rows;
  return candidates;
}

export async function updateJobDatabase(job) {
  const sqlQuery =
    "INSERT INTO jobs (company_name, start_date, end_date, Java, AWS, JavaScript, Python, SQL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;";
  const parameterValues = [
    job.company_name,
    job.start_date,
    job.end_date,
    job.java,
    job.AWS,
    job.JavaScript,
    job.Python,
    job.SQL,
  ];
  const result = await pool.query(sqlQuery, parameterValues);
  const created = result.rows[0];
  return created;
}
