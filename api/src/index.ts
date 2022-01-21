import { ApolloServer } from 'apollo-server';

interface Avo {
  name: string;
  sku: string;
  weight: number;
  description: String;
  image: String;
  attributes: {
    taste: String
    hardiness: String
    shape: String
  }
}

let Avos: Avo[] = [];

// 1 - query
const typeDefs = `
  type AvoAttributes {
    taste: String
    hardiness: String
    shape: String
  }

  input AvoAttributesInput {
    taste: String
    hardiness: String
    shape: String
  }

  type Avo {
    name: String
    sku: String
    weight: Float
    description: String
    image: String
    attributes: AvoAttributes
  }

  type Query {
    info: String!
    avo: [Avo]
  }

  type Mutation {
    addAvo(name: String!, sku: String!, weight: Float!, description: String, image: String, attributes: AvoAttributesInput): Avo
  }
`;

// 2 - resolvers
const resolvers = {
  Query: {
    info: () => 'This is the API of a Platzi Node GraphQL',
    avo: () => {
      return Avos;
    }
  },
  Mutation: {
    addAvo: (parent: any, args: Avo) => {
      let { name, sku, weight, description, image, attributes } = args;

      Avos.push({
        name,
        sku,
        weight,
        description,
        image,
        attributes
      });

      return {
        name,
        sku,
        weight,
      };
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(8000).then(({ url }) => console.log(`Server listening on ${url}`));