import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "xakxa",
  api_key: "221313277588743",
  api_secret: "YnVU-Z25_lZMUmAOek5MRVZloZQ",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "img",
  });
};
