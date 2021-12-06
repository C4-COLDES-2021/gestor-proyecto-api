import { gql } from 'apollo-server-express';


const tiposRol = gql`
  type Rol {
    _id: ID!
    descripcion: String!
  }
  
  type Query {
    Roles: [Rol]
    Rol(_id: String!): Rol
  }
  `;
  export { tiposRol };