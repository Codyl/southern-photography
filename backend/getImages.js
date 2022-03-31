import express from "express";
const app = express();
import "dotenv/config";

//requiring path and fs modules
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
import { getImage, getImages } from "./s3.js";

import cors from "cors";
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/images/:gid", async (req, res) => {
  const images = await getImages(req.params.gid);
  res.send(images);
});

app.get("/image/:id", async (req, res) => {
  const image = await getImage(req.params.id);
  res.send(image);
});

app.listen(process.env.PORT);
