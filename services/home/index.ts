import apiGraphQL from "../api";
import { URI_API_EXPRESS } from "../utils/constants";

// UTILIZAMOS INTERFACES PARA EL ARREGLO DE  DATA QUE VIENE

interface ICharacter {
  id: string;
  name: string;
  image: string;
}

export const exeGetCharacters = async () => {
try {
  const resp = await apiGraphQL.get(URI_API_EXPRESS.getCharacters);
  console.log("resp", resp);
  const characters: ICharacter[] = resp.data;
  return characters;
} catch (error) {
  console.log(error);
  return null;

};
}
