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

function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file, { encoding: "base64" });
}

export const getImages = async (groupPrefix) => {
  try {
    const response = await s3
      .listObjectsV2({
        Bucket: process.env.BUCKET_NAME,
        MaxKeys: 20,
        Prefix: groupPrefix,
      })
      .promise();
    const promises = response.Contents.map(async (item) => {
      const image = await getImage(item.Key);
      return image;
    });
    const completePromises = await Promise.all(promises);
    return completePromises;
  } catch (e) {
    console.log("our error", e);
  }
};

export const getImage = async (imageName) => {
  const data = await s3
    .getObject({
      Bucket: process.env.BUCKET_NAME,
      Key: imageName,
    })
    .promise();
  return data.Body.toString("utf-8");
};
// const testImage = await getImages("group1");
// console.log(testImage);
