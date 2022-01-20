import query from "../index.js"

//(id,date,item,checked,position)

// {
//     user_ID: 1,
//     toDoItem: "w3d4",
//     date: "291121",
//     checked: true,
//     positionToDo: 1,
//   },

import {moods, users, toDo, journalArticles} from "../../bin/DummyData/index.js"
// users (id SERIAL PRIMARY KEY, name TEXT, cohort INT)


const SQLquery = 'INSERT INTO todos (id,date,item,checked,position) VALUES ($1,$2,$3,$4,$5)'
async function populateToDosTable({user_ID,date,toDoItem,checked,positionToDo})  {
    
    let res = await query({text:SQLquery,values:[user_ID,date,toDoItem,checked,positionToDo]});
    console.log(res.rows);
   }
 

toDo.forEach((v)=>{
    populateToDosTable(v)
})
  