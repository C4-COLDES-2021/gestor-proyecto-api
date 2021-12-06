import { gql } from 'apollo-server-express';


const tiposEstadoInscripcion = gql`
  type EstadoInscripcion {
    _id: ID!
    descripcion: String!
  }
  
  type Query {
    EstadosInscripcion: [EstadoInscripcion]
    EstadoInscripcion(_id: String!): EstadoInscripcion
  }
  `;
  export { tiposEstadoInscripcion };