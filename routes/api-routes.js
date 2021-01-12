// const path = require("path");
const mongoose = require("mongoose");
const apiRouter = require("express").Router();
const db = require("../models");

apiRouter.get("/api/workouts", (req, res) => {
    console.log("For init function & getLastWorkout Router");
    db.Workout.find().then(dbExercise => {
        res.json(dbExercise);
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
});

apiRouter.get("/api/workouts/range", (req, res) => {
 console.log();
 console.log("in side /api/workouts/range ROUTER");
 console.log();
});


apiRouter.post("/api/workouts", (req, res) => {
    console.log("For initExercise function& createWorkout Router");
});

apiRouter.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    
    if(req.params.id === "undefined"){
        db.Workout.create({exercises: req.body}).then(result =>{
            res.json(result);
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    }else{
        console.log("There is ID");
        console.log(req.params.id);
        db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, (err, data) => {
            if (err) {
                console.log(err);
                res.send(err);
              }else {
                res.json(data);
              }
        });
    }
    

});

apiRouter.get("/api/workouts/range", (req, res)=> {
    console.log("Dash Board to get all information");
});

module.exports = apiRouter;