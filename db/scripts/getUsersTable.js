import query from "../index.js"



const SQLquery = "SELECT * FROM users"
async function getUsersTable()  {
    
    let res = await query(SQLquery);
    console.log(res.rows);
   }
 


   getUsersTable()