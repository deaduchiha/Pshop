const { Router } = require("express");
const postController = require("./post.controller");
const upload = require("../../common/utils/multer");
const authorization = require("../../common/guard/authorization.guard");
const router = Router();

router.get("/create", authorization, postController.createPostPage);
router.post(
  "/create",
  authorization,
  upload.array("images", 10),
  (req, res, next) => {
    console.log("Passed authorization and upload middleware");
    next();
  },
  postController.create
);
router.get("/my", authorization, postController.findMyPosts);
router.delete("/delete/:id", authorization, postController.remove);
router.get("/:id", postController.showPost);
router.get("/list", postController.postList);

module.exports = { postRouter: router };
