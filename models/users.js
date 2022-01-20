import { response } from "express";
import query from "../db/index.js";

//CRUD
//Create
//READ
//UPDATE
//DELETE

export async function getHomepageData(id){
    const response = query({text:"SELECT * FROM users WHERE id=$1",values:[id]})
    return response
}

export async function getAllUsers() {
  return await query("SELECT * FROM users");
}

export async function getUserByID(userId) {
  return await query({
    text: "SELECT * FROM users WHERE id=$1",
    values: [userId],
  });
}

export async function addNewUser({ name, cohort }) {
  return await query({
    text: "INSERT INTO users (name, cohort) VALUES ($1, $2)",
    values: [name, cohort],
  });
}

export async function updateUserById(id, body) {
  /// Send a patch request to /api/journals/:id/:date with a body:{} with text and column (TITLE or BODY)

  // (req.params.id, req.params.date, req.body.column, req.body)

  switch (body.column) {
    case "NAME":
      return await query({
        text: "UPDATE users SET name=$1 WHERE id=$2",
        values: [body.text, id],
      });
    case "COHORT":
      return await query({
        text: "UPDATE users SET cohort=$1 WHERE id=$2",
        values: [body.text, id],
      });
    case"ID":
    return await query({
        text: "UPDATE users SET id=$1 WHERE id=$2",
        values: [body.text, id],
      });
    default:
      return "Invalid column type in patch request, did you mean NAME, COHORT or ID?{patch user}";
  }
}

export async function deleteUserById(id) {
  const response = await query({
    text: "DELETE FROM users WHERE id=$1",
    values: [id],
  });
  return response;
}
