import express from "express";
import { getJournalByUserIDandDate, getAllJournals,addNewJournal, updateJournalByIdAndDate,deleteJournalByIdAndDate } from ".../models/journals.js"



const router = express.Router();



//   CRUD:   
// CREATE 
// READ 
// UPDATE 
// DELETE


/* GET users listing. */

router.get("/", function (req, res, next) {

    const response = await getAllJournals()
  res.json( {payload: response});
});

router.get("/:id/:date", function (req, res, next) {

    const response = await getJournalByUserIDandDate(req.params.id, req.params.date
        )
  res.json( {payload: response});
});


router.post("/:id/:date", function (req, res, next) {

    const response = await addNewJournal(req.body, req.params.id, req.params.date)
    res.json( {payload: response})
});

router.patch("/:id/:date", function(req,res,next){

        const response = await updateJournalByIdAndDate(req.params.id, req.params.date, req.body)
        res.json( {payload: response})
})

router.delete("/:id/:date", function(req,res,next){

    const response = await deleteJournalByIdAndDate(req.params.id, req.params.date)
    res.json( {payload: response})
})


export default router;


