import { Schema, model } from 'mongoose';

const EstadoInscripcionSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const EstadoInscripcionModel = model('Proyectos_Objetivos', EstadoInscripcionSchema, "estados_inscripciones");

export {EstadoInscripcionModel};
