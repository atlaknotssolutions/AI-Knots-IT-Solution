const router = require("express").Router();
const {
 
  createContent,
  getHomeData,
    updateHomeData,
    deletedContent,
    getSingleContent,
    incrementView,
    toggleLike,
    addComment

} = require("../../controller/Homecontroller/homecontroller");


router.post("/create", createContent);
router.get("/product", getHomeData);
router.get("/users", getHomeData);
router.get("/product/:id", getSingleContent);
router.delete("/product/:id",deletedContent)
router.put("/updatehome/:id", updateHomeData);


router.post("/:id/view", incrementView);
router.post("/:id/like", toggleLike);
router.post("/:id/comment", addComment);
module.exports = router;
