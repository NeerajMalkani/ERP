import { createContext } from "react";

//Raw Materials
const stateRawMaterials = [[], () => {}];
const RawMaterialsContext = createContext({ rawMaterials: stateRawMaterials });
const RawMaterialsContextProvider = RawMaterialsContext.Provider;
const RawMaterialsContextConsumer = RawMaterialsContext.Consumer;


export { RawMaterialsContext, RawMaterialsContextProvider, RawMaterialsContextConsumer };