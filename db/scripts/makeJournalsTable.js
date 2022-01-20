import query from "../index.js"

//(userid, date, title, body)

const SQLquery = "CREATE TABLE IF NOT EXISTS journals (id INTEGER,date TEXT, title TEXT,body TEXT)"
async function makeJournalsTable()  {
    
    let res = await query(SQLquery);
    console.log(res.rows);
   }
 


   makeJournalsTable()