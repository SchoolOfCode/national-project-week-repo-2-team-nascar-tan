import query from "../index.js"



import {moods, users, toDo, journalArticles} from "../../bin/DummyData/index.js"
// users (id SERIAL PRIMARY KEY, name TEXT, cohort INT)


const SQLquery = 'INSERT INTO users (name, cohort) VALUES ($1, $2)'
async function populateUsersTable({userName, cohort})  {
    
    let res = await query({text:SQLquery,values:[userName, cohort]});
    console.log(res.rows);
   }
 

users.forEach((v)=>{
    populateUsersTable(v)
})
  