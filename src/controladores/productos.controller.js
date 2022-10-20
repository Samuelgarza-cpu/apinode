import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    // throw new Error('my error')
    const [result] = await pool.query("select * from usuarios");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      Mensaje: "Error al intentar traer usuarios",
    });
  }
};

export const getProductoID = async (req, res) => {
  const { id } = req.params;

  const [result] = await pool.query("select * from usuarios where id = ?", [
    id,
  ]);

  if (result.length <= 0)
    return res.status(404).json({
      mensaje: "No se encontro producto",
    });
  res.json(result[0]);
};
export const insertarProducto = async (req, res) => {
  const { email, pass } = req.body;

  try {
    // throw new error('my error')
    const [result] = await pool.query(
      "insert into usuarios(email,pass) values (?,?)",
      [email, pass]
    );

    if (result.affectedRows <= 0) {
      res.send("No se inserto registro");
    } else {
      res.send("SE INSERTO CORRECTAMENTE");
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al intentar insertar",
    });
  }
};
