import { countries } from "../constants";

function countryById(id) {
  return countries.find((country) => country.id === id);
}

export default countryById;