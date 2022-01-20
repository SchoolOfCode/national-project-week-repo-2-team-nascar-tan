import query from "../index.js"

// {
//     user_ID: 1,
//     title: "I'm doing great!",
//     body: "Today I did a really good job at being project manager.",
//     date: "190121",
//   },

import {moods, users, toDo, journalArticles} from "../../bin/DummyData/index.js"
// users (id SERIAL PRIMARY KEY, name TEXT, cohort INT)

//(userid, date, title, body)

const SQLquery = 'INSERT INTO journals (id, title,body,date) VALUES ($1, $2, $3, $4)'
async function populateJournalsTable({user_ID, title, body, date})  {
    
    let res = await query({text:SQLquery,values:[user_ID,title,body,date]});
    console.log(res.rows);
   }
 

journalArticles.forEach((v)=>{
    populateJournalsTable(v)
})
  