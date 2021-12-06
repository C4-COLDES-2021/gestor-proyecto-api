import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js';
import { tiposRol } from '../models/rol/tipos.js';
import { tiposTipoObjetivo } from '../models/tipo_objetivo/tipos.js';
import { tiposEstadoInscripcion } from '../models/estado_inscripcion/tipos.js';
import { tiposEstadoProyecto } from '../models/estado_proyecto/tipos.js';
import { tiposFaseProyecto } from '../models/fase_proyecto/tipos.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposEnums,
  tiposUsuario,
  tiposRol,
  tiposTipoObjetivo,
  tiposEstadoInscripcion,
  tiposEstadoProyecto,
  tiposFaseProyecto,
];
