const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DB_URL;
//Mismo aquí al conectar con la nube. Colocarl al ruta creada de cluster (luego de los 3 cambios) en el archivo ".env->DB_URL=(aquí la ruta)"
const connectDb = async () => {
    try{
        const db = await mongoose.connect(DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        const {name, host} = db.connection;
        console.log(`Connected with db ${name} in host ${host}`);
    }catch(error){
        console.log(`Error connecting to MongoDB: ${error}`);
    }
}
module.exports = {connectDb, DB_URL};