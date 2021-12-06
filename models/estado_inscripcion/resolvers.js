import { EstadoInscripcionModel } from './estado_inscripcion.js';

const resolversEstadoInscripcion = {
    Query: {
        EstadosInscripcion: async (parent, args) => {
          console.log('parent rol', parent);
          const estadoInscripcion = await EstadoInscripcionModel.find();
          return estadoInscripcion;
        },
        EstadoInscripcion: async (parent, args) => {
          const estadoInscripcion = await EstadoInscripcionModel.findOne({ _id: args._id });
          return estadoInscripcion;
        },
      },

}


export { resolversEstadoInscripcion };