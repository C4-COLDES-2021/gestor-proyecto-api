//import antiguo "const {connect} = require ('mongoose');"

import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(
        'mongodb+srv://admin:Aurora21@cluster0.l6xpl.mongodb.net/GestorProyectos?retryWrites=true&w=majority'
    )
        .then(() => {
            console.log('Conexion exitosa');
        })
        .catch((e) => {
            console.error('Error conectando la bd ', e);
        })
}

export default conectarBD;