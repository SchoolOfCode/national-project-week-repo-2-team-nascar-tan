import { response } from "express";
import query from "../db/index.js";

//CRUD
//Create
//READ
//UPDATE
//DELETE

export async function getJournalByUserIDandDate(userId, date){
    return await query({text:"SELECT * FROM journals WHERE id=$1 AND date=$2", values:[userId, date]})

}

export async function getAllJournals(){
    return await query("SELECT * FROM journals")

}


export async function addNewJournal(article, id, date){

    return await query({text:"INSERT INTO journals (id, date, title, body) VALUES ($1, $2, $3, $4)", values:[id, date, article.title, article.body]})

}


export async function updateJournalByIdAndDate(id, date, body){ /// Send a patch request to /api/journals/:id/:date with a body:{} with text and column (TITLE or BODY)

    // (req.params.id, req.params.date, req.body.column, req.body)


        if (body.column==="TITLE"){
            return await query({text:"UPDATE journals SET title=$1 WHERE id=$2 AND date=$3", values:[body.text,id,date ]})
        }else if(body.column==="BODY"){
            return await query({text:"UPDATE journals SET body=$1 WHERE id=$2 AND date=$3", values:[body.text,id,date ]})
        }else{
            return "Invalid column type in patch request, did you mean TITLE or BODY?"
        }
    
}


export async function replaceJournalByIdAndDate(id, date, body){ ///Deletes current journal, reapps it

    // (req.params.id, req.params.date, req.body.column, req.body)

        await deleteJournalByIdAndDate(id, date)
        return await addNewJournal({title:body.title,body:body.body},id,date)

    
}

export async function deleteJournalByIdAndDate(id, date){
    const response = await query({text:"DELETE FROM journals WHERE id=$1 AND date=$2", values:[id, date]})
    return response
}