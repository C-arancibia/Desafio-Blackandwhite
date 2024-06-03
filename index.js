//crear el servidor de node con express
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import router from "./routes/router.js";

app.use(express.static("assets"));
app.use("/", router);

app.listen(port, () => {
console.log(`Servidor iniciado en el puerto http://localhost:${port}`);
});