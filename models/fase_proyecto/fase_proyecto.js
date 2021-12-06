
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const FaseProyectoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const FaseProyectoModel = model('FaseProyecto', FaseProyectoSchema, "fases_proyectos");

export {FaseProyectoModel};
