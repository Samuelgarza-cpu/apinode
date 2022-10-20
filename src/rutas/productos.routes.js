import { Router } from "express";
import {
  getProductos,
  getProductoID,
  insertarProducto,
} from "../controladores/productos.controller.js";
const router = Router();
router.get("/", (req, res) => res.send("Entraste al sistema"));
router.get("/producto", getProductos);
router.get("/producto/:id", getProductoID);
router.post("/producto", insertarProducto);

export default router;
