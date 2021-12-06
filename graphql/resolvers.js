
import { resolversUsuario } from '../models/usuario/resolvers.js';
import { resolversRol } from '../models/rol/resolvers.js';
import { resolversTipoObjetivo } from '../models/tipo_objetivo/resolvers.js';
import { resolversEstadoInscripcion } from '../models/estado_inscripcion/resolvers.js';
import { resolversEstadoProyecto } from '../models/estado_proyecto/resolvers.js';
import { resolversFaseProyecto } from '../models/fase_proyecto/resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolversRol,
  resolversTipoObjetivo,
  resolversEstadoInscripcion,
  resolversEstadoProyecto,
  resolversFaseProyecto,
];
