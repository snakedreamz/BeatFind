const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { Image } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    console.log(images);
    res.json(images);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await Image.findAll({
      where: {
        userId: id,
      },
    });
    console.log(images);
    res.json(images);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { userId, albumId, imageUrl, content } = req.body;
    const newImage = await Image.create({ userId, albumId, imageUrl, content });
    if (!newImage) {
      const error = new Error("Image failed to post.");
      error.status = 401;
      error.title = "Posting image failed";
      error.errors = ["your image did not post."];
      return next(error);
    }
    return res.json(newImage);
  })
);

module.exports = router;