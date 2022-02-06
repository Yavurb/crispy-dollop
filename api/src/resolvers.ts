import { resolvers as avocadoResolvers } from "./modules/Avocado";

// Scalars
import loadScalars from './customScalars';

const loadedScalars = loadScalars();

const resolvers = {
  ...loadedScalars,
  Query: {
    ...avocadoResolvers.queries,
  },
  Mutation: {
    ...avocadoResolvers.mutations,
  }
};

export default resolvers;