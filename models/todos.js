import { response } from "express";
import query from "../db/index.js";


// todos (userid, date, ToDoItem, checked, positionToDo)

//CRUD
//Create
//READ
//UPDATE
//DELETE
export async function getAllToDos(){
    return await query("SELECT * FROM todos")

}

export async function getToDoListByUserIDandDate(userId, date){
    return await query({text:"SELECT * FROM todos WHERE id=$1 AND date=$2 ORDER BY position", values:[userId, date]})

}




export async function addNewToDoByIdAndDate(body, id, date){

    return await query({text:"INSERT INTO todos (id, date, item, checked, position) VALUES ($1, $2, $3, $4, $5)", values:[id, date, body.item, body.checked, body.position]})

}


export async function updateToDoByIdAndDateAndPosition(id, date, position, body){ /// Send a patch request to /api/journals/:id/:date with a body:{} with text and column (TITLE or BODY)

    // (req.params.id, req.params.date, req.body.column, req.body)


        switch(body.column){
            case "TODOITEM":
            return await query({text:"UPDATE todos SET item=$1 WHERE id=$1 AND date=$2 AND position=$3", values:[body.text,id,date, position ]})
            case "POSITION":
            return await query({text:"UPDATE todos SET position=$1 WHERE id=$2 AND date=$3 AND position=$4", values:[body.text,id,date, position ]})
            case "CHECKED":
                // console.log(body.text)
            return await query({text:"UPDATE todos SET checked=$1 WHERE id=$2 AND date=$3 AND position=$4", values:[body.text,id,date, position ]})

            default:
            return "Invalid column type in patch request, did you mean TITLE or BODY?"
        }
        
    
}

export async function deleteToDoByIdAndDateAndPosition(id, date,position){
    const response = await query({text:"DELETE FROM todos WHERE id=$1 AND date=$2 AND position=$3", values:[id, date,position]})
    return response
}