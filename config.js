import { discoverEmberDataModels } from 'ember-cli-mirage';

import { createServer } from 'mirage.js';


export default function (config) {
  const finalConfig - {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes,
  };
  
  return createServer(finalConfig);
}

function routes() {
}
