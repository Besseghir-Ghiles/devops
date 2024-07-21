import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques de votre répertoire "public"
app.use(express.static(path.join(__dirname, "public")));

// Route pour servir l'application
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

if (import.meta.url === `file://${__filename}`) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
