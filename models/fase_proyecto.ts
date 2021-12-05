import { Schema, model } from 'mongoose';

const FaseProyectoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const FaseProyectoModel = model('Proyectos_Objetivos', FaseProyectoSchema, "fases_proyectos");

export {FaseProyectoModel};
