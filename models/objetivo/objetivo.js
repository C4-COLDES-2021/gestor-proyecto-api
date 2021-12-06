
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import { TipoObjetivoModel } from '../tipo_objetivo/tipo_objetivo.js';
import { ProjectoModel } from '../proyecto/proyecto.js';


// import { ProjectModel } from './proyecto/proyecto.js';

// interface Objective {
//   descripcion: string;
//   tipo: Enum_TipoObjetivo;
// }

const ObjectivoSchema = new Schema({
  
  descripcion: {
    type: String,
    required: true,
  },

  tipo: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: TipoObjetivoModel,
  },

  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: ProjectoModel,
  },
});

const ObjectivoModel = model('Objetivo', ObjectivoSchema, "proyectos_objetivos");

export { ObjectivoModel };
