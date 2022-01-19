import express from "express";
import { getToDoByUserIDandDate, getAllToDos,addNewToDoByIdAndDate, updateToDoByIdAndDateAndPosition,deleteToDoByIdAndDateAndPosition } from ".../models/todos.js"



const router = express.Router();



//   CRUD:   
// CREATE 
// READ 
// UPDATE 
// DELETE


/* GET users listing. */

router.get("/", function (req, res, next) {

    const response = await getAllToDos()
  res.json( {payload: response});
});

router.get("/:id/:date", function (req, res, next) {

    const response = await getToDoListByUserIDandDate(req.params.id, req.params.date
        )
  res.json( {payload: response});
});


router.post("/:id/:date", function (req, res, next) {

    const response = await addNewToDoByIdAndDate(req.body, req.params.id, req.params.date)
    res.json( {payload: response})
});

router.patch("/:id/:date/:position", function(req,res,next){

        const response = await updateToDoByIdAndDateAndPosition(req.params.id, req.params.date,req.params.position, req.body)
        res.json( {payload: response})
})

router.delete("/:id/:date/:position", function(req,res,next){

    const response = await deleteToDoByIdAndDateAndPosition(req.params.id, req.params.date,req.params.position)
    res.json( {payload: response})
})


export default router;


