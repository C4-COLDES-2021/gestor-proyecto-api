
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const EstadoInscripcionSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const EstadoInscripcionModel = model('EstadoIncripcion', EstadoInscripcionSchema, "estados_inscripciones");

export {EstadoInscripcionModel};
