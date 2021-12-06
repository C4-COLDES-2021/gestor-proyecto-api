import { TipoObjetivoModel } from './tipo_objetivo.js';

const resolversTipoObjetivo = {

    Query: {
        TiposObjetivos: async (parent, args) => {
          console.log('parent rol', parent);
          const tipoObjetivo = await TipoObjetivoModel.find();
          return tipoObjetivo;
        },
        TipoObjetivo: async (parent, args) => {
          const tipoObjetivo = await TipoObjetivoModel.findOne({ _id: args._id });
          return tipoObjetivo;
        },
      },

}


export { resolversTipoObjetivo };