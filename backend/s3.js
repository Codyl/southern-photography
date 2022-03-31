import fs from "fs";
import AWS from "aws-sdk";
import "dotenv/config";
AWS.config.setPromisesDependency();
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "us-east-2",
});

const s3 = new AWS.S3();

const encode = (data) => {
  let buf = Buffer.from(data);
  let base64 = buf.toString("base64");
  return base64;
};

export const getImages = async (groupPrefix) => {
  try {
    const response = await s3
      .listObjectsV2({
        Bucket: process.env.BUCKET_NAME,
        MaxKeys: 20,
        Prefix: groupPrefix + "/",
      })
      .promise();
    const promises = response.Contents.map(async (item) => {
      if (item.Key !== groupPrefix + "/") {
        const image = await getImage(item.Key);
        return image;
      }
    });
    const completePromises = await Promise.all(promises);
    return completePromises;
  } catch (e) {
    console.log("our error", e);
  }
};

export const getImage = async (imageName) => {
  //data contains a data stream
  const data = await s3
    .getObject({
      Bucket: process.env.BUCKET_NAME,
      Key: imageName,
    })
    .promise();
  const encodedImage = encode(data.Body);
  return `data:image:/image/jpeg;base64,${encodedImage}`;
};
// const testImages = await getImages("group1");
// console.log(testImages);

// const testImage = await getImage("group1-0.jpg");
// console.log(testImage);
