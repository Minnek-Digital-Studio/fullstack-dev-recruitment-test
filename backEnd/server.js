import { dataBase } from "./dataBase.js";
import routerProduct from "./router/routerProduct.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import expressFileUpload from "express-fileupload";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressFileUpload({
    tempFileDir: "img",
    useTempFiles: true,
  })
);

app.use("/api", routerProduct);

dataBase();
await app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
