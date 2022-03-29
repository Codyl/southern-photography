const AWS = require("aws-sdk");
require("dotenv/config");
console.log(process.env.ACCESS_KEY_ID);
(async function () {
  try {
    AWS.config.setPromisesDependency();
    AWS.config.update({
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region: "us-east-2",
    });

    const s3 = new AWS.S3();
    const response = await s3
      .listObjectsV2({
        Bucket: process.env.BUCKET_NAME,
      })
      .promise();

    console.log(response);
  } catch (e) {
    console.log("our error", e);
  }
})();
