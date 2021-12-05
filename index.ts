import conectarBD from './db/db';
import {UsuarioModel} from './models/usuario';



const main = async () => {
    await conectarBD();
   
};

main();