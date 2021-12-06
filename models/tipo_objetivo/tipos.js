import { gql } from 'apollo-server-express';


const tiposTipoObjetivo = gql`
  type TipoObjetivo {
    _id: ID!
    descripcion: String!
  }
  
  type Query {
    TiposObjetivos: [TipoObjetivo]
    TipoObjetivo(_id: String!): TipoObjetivo
  }
  `;
  
  
  export { tiposTipoObjetivo };