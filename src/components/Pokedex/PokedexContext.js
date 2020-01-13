import React from 'react';

const PokedexContext = React.createContext();
const PokedexProvider = PokedexContext.Provider;
const PokedexConsumer = PokedexContext.Consumer;

export { PokedexProvider, PokedexConsumer };
