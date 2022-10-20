import express from "express";
import router from "./rutas/productos.routes.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.text());
app.set("puerto", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

app.listen(app.get("puerto"), () => {
  console.log("SERVIDOR CORRIENDO EN EL PUERTO", app.get("puerto"));
});
