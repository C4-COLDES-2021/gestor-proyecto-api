import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const TipoObjetivoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const TipoObjetivoModel = model('TipoObjetivo', TipoObjetivoSchema, "tipos_objetivos");

export {TipoObjetivoModel};

