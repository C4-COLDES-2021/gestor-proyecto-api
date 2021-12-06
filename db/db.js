//import antiguo "const {connect} = require ('mongoose');"

import mongoose from 'mongoose';

const conectarBD = async () => {
    return await mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log('Conexion exitosa');
        })
        .catch((e) => {
            console.error('Error conectando la bd ', e);
        })
}

export default conectarBD;