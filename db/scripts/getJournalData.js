import query from "../index.js"



const SQLquery = "SELECT * FROM journals"
async function getJournalData()  {
    
    let res = await query(SQLquery);
    console.log(res.rows);
   }
 


   getJournalData()