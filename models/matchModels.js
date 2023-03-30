import { query } from "../data/index.js";

//get all candidates

export async function getAllCandidates() {
    const result = await query(`SELECT * FROM candidates`);
    const allCandidates = result.rows;
    return allCandidates;
}


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

//create a candidate
export async function createCandidate(newCandidate) {
    const result = await query(`INSERT INTO "public"."candidates" 
    (first_name, last_name, start_date, end_date, Java, AWS, JavaScript, Python, SQL)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [newCandidate.first_name, newCandidate.last_name, newCandidate.start_date, newCandidate.end_date, newCandidate.Java, newCandidate.AWS, newCandidate.JavaScript, newCandidate.Python, newCandidate.SQL]
    );
    return result.rows;
}

//get candidate by id
export async function GetCandidateById(id) {
    const result = await query(`SELECT * 
    FROM "public"."candidates" 
    WHERE id = $1`, [id]);
    const candidate = result.rows[0];
    return candidate;
}