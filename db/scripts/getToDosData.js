import query from "../index.js"



const SQLquery = "SELECT * FROM todos"
async function getToDosData()  {
    
    let res = await query(SQLquery);
    console.log(res.rows);
   }
 


   getToDosData()