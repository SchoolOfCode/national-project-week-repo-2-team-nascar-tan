import query from "../index.js"



const SQLquery = "DELETE FROM todos WHERE id>0"
async function deleteToDosData()  {
    
    let res = await query(SQLquery);
    console.log(res.rows);
   }
 


   deleteToDosData()