import { Schema, model } from 'mongoose';

const RolSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const RolModel = model('Proyectos_Objetivos', RolSchema, "roles");

export {RolModel};
