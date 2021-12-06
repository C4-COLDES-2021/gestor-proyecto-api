import { gql } from 'apollo-server-express';


const tiposFaseProyecto = gql`
  type FaseProyecto {
    _id: ID!
    descripcion: String!
  }
  
  type Query {
    FasesProyecto: [FaseProyecto]
    FaseProyecto(_id: String!): FaseProyecto
  }
  `;
  export { tiposFaseProyecto };