/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from "multer";
// import path from 'path'
// import fs from 'fs'
import { v2 as cloudinary } from "cloudinary";
import { ICloudinaryUploadResponse } from "../../types";

cloudinary.config({
  cloud_name: "dbgrq28js",
  api_key: "173484379744282",
  api_secret: "eHKsVTxIOLl5oaO_BHxBQWAK3GA",
});

const storage = multer.memoryStorage();

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'uploads'
//   }
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(process.cwd(), 'uploads'))
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   },
// })

// const uploadToCloudinary = async (
//   file: IFile,
// ): Promise<ICloudinaryUploadResponse | undefined> => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       file.path,
//       // {public_id: file.originalname},
//       (error: Error, result: ICloudinaryUploadResponse) => {
//         fs.unlinkSync(file.path)
//         if (error) {
//           reject(error)
//         } else {
//           resolve(result)
//         }
//       },
//     )
//   })
// }

const upload = multer({ storage: storage });

const uploadToCloudinary = async (
  file: any //Express.Multer.File
): Promise<ICloudinaryUploadResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        // { folder: 'uploads' }, // Optional: specify Cloudinary folder
        (error: any, result: ICloudinaryUploadResponse) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      )
      .end(file.buffer); // Use file.buffer to upload from memory
  });
};

export const fileUploader = {
  upload,
  uploadToCloudinary,
};
