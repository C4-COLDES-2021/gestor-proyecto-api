
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import { UsuarioModel } from '../usuario/usuario.js';
import { EstadoInscripcionModel } from '../estado_inscripcion/estado_inscripcion.js';

const InscripcionSchema = new Schema({
    fecha_ingreso: {
        type: Date,
        required: true,
    },

    fecha_egreso: {
        type: Date,
    },

    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProjectoModel,
    },

    estudiante: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UsuarioModel,
    },

    estado: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: EstadoInscripcionModel,
    },



});

const InscripcionModel = model('Inscripcion', InscripcionSchema, "inscripciones");

export { InscripcionModel };