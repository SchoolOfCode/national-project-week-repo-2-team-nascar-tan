import query from "../index.js"



const SQLquery = "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, cohort INT)"
async function makeUsersTable()  {
    
    let res = await query(SQLquery);
    console.log(res.rows);
   }
 


   makeUsersTable()