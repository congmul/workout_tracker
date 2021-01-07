const path = require("path");
const apiRouter = require("express").Router();

apiRouter.get("/api/workouts", (req, res) => {
    res.json({name: "name"}); // Should modify!!
});
apiRouter.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
})

module.exports = apiRouter;