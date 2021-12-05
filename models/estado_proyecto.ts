import { Schema, model } from 'mongoose';

const EstadoProyectoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const EstadoProyectoModel = model('Proyectos_Objetivos', EstadoProyectoSchema, "estados_proyectos");

export {EstadoProyectoModel};
