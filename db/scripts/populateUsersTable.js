import query from "../index.js"


// users (id SERIAL PRIMARY KEY, name TEXT, cohort INT)


const SQLquery = 'INSERT INTO users (name, cohort) VALUES ($1, $2)'
async function populateUsersTable()  {
    
    let res = await query({text:SQLquery,values:["Callum", 11]});
    console.log(res.rows);
   }
 


   populateUsersTable()