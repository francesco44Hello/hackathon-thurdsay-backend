import { query } from "../data/index.js";

export async function getAllCandidates() {
  const result = await query(`SELECT * FROM "public"."candidates" LIMIT 100`);
  const allCandidates = result.rows;
  return allCandidates;
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