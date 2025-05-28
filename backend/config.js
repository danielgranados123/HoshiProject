// backend/src/config.js
export const config = {
  db: { URI: process.env.DB_URI || "mongodb://localhost/HoshiDB" },
  server: { port: process.env.PORT || 4000 }
};
