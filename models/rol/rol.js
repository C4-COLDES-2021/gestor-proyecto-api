import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const RolSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
      },
});

const RolModel = model('Rol', RolSchema, "roles");

export {RolModel};
