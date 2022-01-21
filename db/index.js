import pg from "pg"
// import {connectionString} from "../config.js" 

import * as config from "../config.js"


const pool = new pg.Pool({
  user: config.databaseUserName,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
    ssl:{rejectUnauthorized:false} })




 export default async function query(text, params)  {
    return pool.query(text, params)
  }

//   console.log({config})


// export const databaseUserName = process.env.USER_NAME_DB
// export const host = process.env.HOST
// export const database = process.env.DATABASE
// export const password = process.env.PASSWORD_DB
// export const port = process.env.DB_PORT_NAME