import { Schema, model } from 'mongoose';

const TipoObjetivoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const TipoObjetivoModel = model('Proyectos_Objetivos', TipoObjetivoSchema, "tipos_objetivos");

export {TipoObjetivoModel};

