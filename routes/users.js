import express from "express";
import { getUserByID, getAllUsers,addNewUser, updateUserById, deleteUserById } from ".../models/journals.js"



const router = express.Router();



//   CRUD:   
// CREATE 
// READ 
// UPDATE 
// DELETE


/* GET users listing. */

router.get("/", function (req, res, next) {

    const response = await getAllUsers()
  res.json( {payload: response});
});

router.get("/:id", function (req, res, next) {

    const response = await getUserByID(req.params.id)
        
  res.json( {payload: response});
});


router.post("/", function (req, res, next) {

    const response = await addNewUser(req.body)
    res.json( {payload: response})
});

router.patch("/:id", function(req,res,next){

        const response = await updateUserById(req.params.id, req.body)
        res.json( {payload: response})
})

router.delete("/:id", function(req,res,next){

    const response = await deleteUserById(req.params.id)
    res.json( {payload: response})
})


export default router;