import axios from "axios";
import CONFIG from "../../config";

// Local
const baseURL = CONFIG.BASE_URL_LOCAL

// Desarrollo
// const baseURL = CONFIG.BASE_URL_DEV

// Produccion
// const baseURL = CONFIG.BASE_URL_PROD

const apiGraphQL = axios.create({
    baseURL: baseURL
});

export default apiGraphQL;
