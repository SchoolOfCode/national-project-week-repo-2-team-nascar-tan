
import query from "../index.js"

// todos (userid, date, ToDoItem, checked, positionToDo)
//(id,date,item,checked,position)

async function makeToDosTable(){

    const response = await query("CREATE TABLE IF NOT EXISTS todos (id INTEGER, date TEXT, item TEXT, checked BOOLEAN, position INTEGER) ")
    // const response = await query("SELECT * FROM todos ")

    return response
    
}

const go = async ()=>{
console.log(await makeToDosTable())
}


go()