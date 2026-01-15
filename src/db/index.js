import mongoose from "mongoose";
import {db_name} from '../constants.js';

const connect_db = async ()=>{
    try {
        const connect_instance=await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`);
        console.log(`Mongo connected || DB host ! ${connect_instance.connection.host}`)
    } catch (error) {
        console.log("DB connetion failed "),error;
        process.exit(1);
        
    }
}

export default connect_db;