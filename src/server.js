
import express from 'express'
import dotenv from "dotenv";
import app from './app.js'

import connect_db from './db/index.js'

dotenv.config();          

connect_db()
.then(()=>{
  try {
    const port = process.env.PORT || 4044
     app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})
  } catch (error) {
    app.on("error",(error)=>{
      console.log("Erro in the app",error);
      throw error;
    })
  }
})
.catch((error)=>{
    console.log("There is an error in the MONGO DB connection",error);
});

