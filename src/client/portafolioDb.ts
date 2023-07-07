import axios from "axios";

const portafolioDb = axios.create({
    baseURL: import.meta.env.PUBLIC_API_URL
})

export default portafolioDb