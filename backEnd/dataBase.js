import mongoose from "mongoose";

export async function dataBase() {
  await mongoose
    .connect("mongodb://localhost/pruebaFullStack")
    .then((db) => console.log("Database is connected to", db.connection.name))
    .catch((error) => console.log(error));
}

dataBase();
