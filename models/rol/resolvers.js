import { RolModel } from './rol.js';

const resolversRol = {

    Query: {
        Roles: async (parent, args) => {
          console.log('parent rol', parent);
          const rol = await RolModel.find();
          return rol;
        },
        Rol: async (parent, args) => {
          const rol = await RolModel.findOne({ _id: args._id });
          return rol;
        },
      },

}


export { resolversRol };