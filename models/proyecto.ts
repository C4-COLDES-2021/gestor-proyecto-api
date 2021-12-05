
import { Schema, model } from 'mongoose';
import { UsuarioModel } from './usuario';
import { EstadoProyectoModel } from './estado_proyecto';
import { FaseProyectoModel } from './fase_proyecto';


// import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from '../enums/enums.js';


// interface Proyecto {
//   nombre: string;
//   presupuesto: number;
//   fechaInicio: Date;
//   fechaFin: Date;
//   estado: Enum_EstadoProyecto;
//   fase: Enum_FaseProyecto;
//   lider: Schema.Types.ObjectId;
//   objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
// }

const projectoSchema = new Schema(
  {
    codigo: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    presupuesto: {
      type: Number,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    estado: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: EstadoProyectoModel,
    },
    fase: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: FaseProyectoModel,
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UsuarioModel,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

projectoSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectoSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});

const ProjectoModel = model('Proyecto', projectoSchema, "proyectos");

export { ProjectoModel };
