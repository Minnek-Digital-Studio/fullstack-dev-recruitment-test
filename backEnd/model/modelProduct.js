import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Price: {
    type: Number,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
  Imagen: {
    public_id: String,
    url: String,
  },
});

export default mongoose.model("schemaProduct", schema);
