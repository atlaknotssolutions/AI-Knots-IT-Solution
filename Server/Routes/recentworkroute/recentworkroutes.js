const router = require("express").Router();
const {
    createTech,
    getTechData,
    
    updateTech,
    deleteTech,
} = require("../../controller/recentworkcontroller/recentworkconrtoller");

router.post("/create", createTech);
router.get("/", getTechData);
router.put("/update/:id", updateTech);
router.delete("/delete/:id", deleteTech);

module.exports = router;
