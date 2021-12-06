import { gql } from 'apollo-server-express';


const tiposEstadoProyecto = gql`
  type EstadoProyecto {
    _id: ID!
    descripcion: String!
  }
  
  type Query {
    EstadosProyecto: [EstadoProyecto]
    EstadoProyecto(_id: String!): EstadoProyecto
  }
  `;
  
  
  export { tiposEstadoProyecto };