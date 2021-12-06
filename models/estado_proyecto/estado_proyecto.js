import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const EstadoProyectoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const EstadoProyectoModel = model('EstadoProyecto', EstadoProyectoSchema, "estados_proyectos");

export {EstadoProyectoModel};
