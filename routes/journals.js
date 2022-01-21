import express from "express";
import { replaceJournalByIdAndDate, getJournalByUserIDandDate, getAllJournals,addNewJournal, updateJournalByIdAndDate,deleteJournalByIdAndDate } from "../models/journals.js"



const router = express.Router();



//   CRUD:   
// CREATE 
// READ 
// UPDATE 
// DELETE


/* GET users listing. */

router.get("/",async function (req, res, next) {

    const response = await getAllJournals()
  res.json( {payload: response.rows});
});

router.get("/:id/:date",async function (req, res, next) {

    const response = await getJournalByUserIDandDate(req.params.id, req.params.date
        )
  res.json( {payload: response.rows});
});


router.post("/:id/:date",async function (req, res, next) {

    const response = await addNewJournal(req.body, req.params.id, req.params.date)
    res.json( {payload: response.rows})
});

router.patch("/:id/:date",async function(req,res,next){

        const response = await updateJournalByIdAndDate(req.params.id, req.params.date, req.body)
        res.json( {payload: response.rows})
})

router.put("/:id/:date",async function(req,res,next){

    const response = await replaceJournalByIdAndDate(req.params.id, req.params.date, req.body) //body of title and body 
    res.json( {payload: response.rows})
})

router.delete("/:id/:date",async function(req,res,next){

    const response = await deleteJournalByIdAndDate(req.params.id, req.params.date)
    res.json( {payload: response.rows})
})


export default router;


