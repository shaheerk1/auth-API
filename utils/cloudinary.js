const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
  // cloud_name: "dc286us7j",
  // api_key: "396935799465543",
  // api_secret: "v_KpJFi1zeRri4rrQ7HI_Mpnr_M",
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
