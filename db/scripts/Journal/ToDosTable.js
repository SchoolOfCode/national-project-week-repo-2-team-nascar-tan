import { response } from "express"
import query from "../../index.js"

// todos (userid, date, ToDoItem, checked, positionToDo)


async function makeToDosTable(){

    // const response = await query("CREATE TABLE IF NOT EXISTS todos (userid INTEGER, date TEXT, ToDoItem TEXT, checked BOOLEAN, positionToDo INTEGER) ")
    const response = await query("SELECT * FROM todos ")

    return response
    
}

const go = async ()=>{
console.log(await makeToDosTable())
}


go()