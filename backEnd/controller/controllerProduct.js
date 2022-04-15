import { uploadImage } from "../cloudinary.js";
import schemaProduct from "../model/modelProduct.js";
import fs from "fs-extra";

export async function getProducts(req, res) {
  try {
    const product = await schemaProduct.find({});
    return res.json(product);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

export async function createProduct(req, res) {
  try {
    const { Name, Price, Description } = req.body;
    let Imagen = null;
    if (req.files?.Imagen) {
      const result = await uploadImage(req.files.Imagen.tempFilePath);
      await fs.remove(req.files.Imagen.tempFilePath);
      Imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    console.log(req.files);

    const newProduct = new schemaProduct({
      Name,
      Price,
      Description,
      Imagen,
    });

    await newProduct.save();
    return res.json(newProduct);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

export async function removerProduct(req, res) {
  try {
    const post = await schemaProduct.deleteMany();

    if (!post) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
