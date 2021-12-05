import { Schema, model } from 'mongoose';
import { ProjectoModel } from './proyecto';
import { UsuarioModel } from './usuario';
import { EstadoInscripcionModel } from './estado_inscripcion';

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

const InscripcionModel = model('Fase', InscripcionSchema, "inscripciones");

export { InscripcionModel };