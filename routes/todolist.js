import express from "express";
import { getToDoListByUserIDandDate, getAllToDos,addNewToDoByIdAndDate, updateToDoByIdAndDateAndPosition,deleteToDoByIdAndDateAndPosition } from "../models/todos.js"



const router = express.Router();



//   CRUD:   
// CREATE 
// READ 
// UPDATE 
// DELETE


/* GET users listing. */

router.get("/",async function (req, res, next) {

    const response = await getAllToDos()
  res.json( {payload: response.rows});
});

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next() })


router.get("/:id/:date",async function (req, res, next) {

    const response = await getToDoListByUserIDandDate(req.params.id, req.params.date
        )
  res.json( {payload: response.rows});
});


router.post("/:id/:date",async function (req, res, next) {

    const response = await addNewToDoByIdAndDate(req.body, req.params.id, req.params.date)
    res.json( {payload: response.rows})
});

router.patch("/:id/:date/:position",async function(req,res,next){

        const response = await updateToDoByIdAndDateAndPosition(req.params.id, req.params.date,req.params.position, req.body)
        res.json( {payload: response.rows})
})

router.delete("/:id/:date/:position",async function(req,res,next){

    const response = await deleteToDoByIdAndDateAndPosition(req.params.id, req.params.date,req.params.position)
    res.json( {payload: response.rows})
})


export default router;


