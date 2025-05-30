// Importo la libreria que acabo de instalar
import dotenv from "dotenv";

// Ejecuto "dotenv" que me ayudará a acceder al .env
dotenv.config();

export const config = {
    db: {
        URI: 
            process.env.DB_URI || "mongodb+srv://danielgranados008:Danielgranados123@cluster2a.bugmr.mongodb.net/HoshiDB",

    },
    server: {
        port:
            process.env.PORT || 4000,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES,
    },
    ADMIN:{
        emailAdmin: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    }
}