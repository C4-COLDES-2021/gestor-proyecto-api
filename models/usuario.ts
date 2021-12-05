import { Schema, model } from 'mongoose';
import { RolModel } from './rol';

const usuarioSchema = new Schema({
  correo: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'El formato del correo electrónico está malo.',
    },
  },
  password: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: RolModel,
  },
  estado: {
    type: String,
    default: 'PENDIENTE',
  },
});

const UsuarioModel = model('Usuario', usuarioSchema, "usuarios");

export { UsuarioModel };
