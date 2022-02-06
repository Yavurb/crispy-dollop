import Avocado from "./interfaces/avocado.interface";
import data from './avocado.data';

const queries = {
  find: (): Avocado[] => {
    return data;
  },
  findById: (parent: any, id: string): Avocado => {
    return data[0];
  }
}

const mutations = {
  addAvocado: (parent: any, { data }: { data: Avocado }): Avocado => {
    console.log('data', data);

    return data;
  },
}

export default {
  queries,
  mutations
};