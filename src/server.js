
import express from 'express'
import dotenv from "dotenv";

import connect_db from './db/index.js'

dotenv.config();          
const app = express()

connect_db()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const port = process.env.PORT || 4044
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
