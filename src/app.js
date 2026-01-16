import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
//middleware 
app.use(cors({
    origin: process.env.CORSORIGIN,
    Credential:true
}));
app.use(express.json({
    limit:"16kb"
}));

app.use(express.static("public"));
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("End is the beginning");
})
export default app;