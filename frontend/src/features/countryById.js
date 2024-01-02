import { countries } from "../constants";

export const countryById = (id) => {
  return countries.find((country) => country.id === id);
}