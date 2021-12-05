import { Schema, model } from 'mongoose';
import { TipoObjetivoModel } from './tipo_objetivo';
import { ProjectoModel } from './proyecto';


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

const ObjectivoModel = model('Proyectos_Objetivos', ObjectivoSchema, "proyectos_objetivos");

export { ObjectivoModel };
