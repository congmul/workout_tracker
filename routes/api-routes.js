// const path = require("path");
const mongoose = require("mongoose");
const apiRouter = require("express").Router();
const db = require("../models");

apiRouter.post("/api/workouts", (req, res) => {
    console.log("For initExercise function& createWorkout Router")
});

apiRouter.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    db.Workout.create({exercise: req.body}).then(result =>{
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.json(err);
    });
    // if(req.body.type === "cardio"){
    //     console.log("cardio");
        // db.Cardio.create(req.body).then(result =>{
        //     res.json(result);
        // }).catch(err => {
        //     console.log(err);
        //     res.json(err);
        // });
    // }else{
    //     console.log("Resistance");
    //     db.Resistance.create(req.body).then(result =>{
    //         res.json(result);
    //     }).catch(err => {
    //         console.log(err);
    //         res.json(err);
    //     });
    // }

});

apiRouter.get("/api/workouts/range", (req, res)=> {
    console.log("Dash Board to get all information");
});

module.exports = apiRouter;