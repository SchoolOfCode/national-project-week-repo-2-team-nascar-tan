import express from "express";
import { getUserByID, getAllUsers,addNewUser, updateUserById, deleteUserById } from "../models/users.js"



const router = express.Router();



//   CRUD:   
// CREATE 
// READ 
// UPDATE 
// DELETE


/* GET users listing. */





router.get("/", async function (req, res, next) {

    const response = await getAllUsers()
    
  res.json( {payload:  response.rows });
});

router.get("/:id",async function (req, res, next) {

    const response = await getUserByID(req.params.id)
        
  res.json( {payload: response.rows});
});


router.post("/",async function (req, res, next) {

    const response = await addNewUser(req.body)
    res.json( {payload: response.rows})
});

router.patch("/:id",async function(req,res,next){

        const response = await updateUserById(req.params.id, req.body)
        res.json( {payload: response.rows})
})

router.delete("/:id",async function(req,res,next){

    const response = await deleteUserById(req.params.id)
    res.json( {payload: response.rows})
})


export default router;