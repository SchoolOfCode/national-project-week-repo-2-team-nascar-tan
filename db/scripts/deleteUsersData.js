import query from "../index.js"



const SQLquery = "DELETE FROM users WHERE id>0"
async function deleteUsersData()  {
    
    let res = await query(SQLquery);
    console.log(res.rows);
   }
 


   deleteUsersData()