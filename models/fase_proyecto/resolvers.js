import { FaseProyectoModel } from './fase_proyecto.js';

const resolversFaseProyecto = {

    Query: {
        FasesProyecto: async (parent, args) => {
          console.log('parent rol', parent);
          const fase = await FaseProyectoModel.find();
          return fase;
        },
        FaseProyecto: async (parent, args) => {
          const fase = await FaseProyectoModel.findOne({ _id: args._id });
          return fase;
        },
      },

}

export { resolversFaseProyecto };