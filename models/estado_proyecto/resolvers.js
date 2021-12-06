import { EstadoProyectoModel } from './estado_proyecto.js';

const resolversEstadoProyecto = {

    Query: {
        EstadosProyecto: async (parent, args) => {
          console.log('parent estado proyecto', parent);
          const estadoProyecto = await EstadoProyectoModel.find();
          return estadoProyecto;
        },
        EstadoProyecto: async (parent, args) => {
          const estadoProyecto = await EstadoProyectoModel.findOne({ _id: args._id });
          return estadoProyecto;
        },
      },

}


export { resolversEstadoProyecto };