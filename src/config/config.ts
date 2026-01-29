import dotenv from "dotenv";
dotenv.config();


const config = {
    port: process.env.PORT || 8080,
    dbURI: process.env.DB_URI,
    secret_key: process.env.SECRET_KEY,
};

export default config;
