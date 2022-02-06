import fs from 'fs';

type ScalarMap = { [index: string]: string };

const scalars: ScalarMap = {};

const loadScalars = (): object => {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    if (file !== 'index.ts') {
      const name: string = file.split('.')[0];
      const { default:customScalar } = require(`./${file}`);
      
      scalars[name] = customScalar;
    }
  })

  return scalars;
};

export default loadScalars;
