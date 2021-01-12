// const path = require("path");
const mongoose = require("mongoose");
const apiRouter = require("express").Router();
const db = require("../models");

apiRouter.get("/api/workouts", (req, res) => {
    console.log("For init function & getLastWorkout Router");
    // db.Workout.find().then(dbExercise => {
    //     res.json(dbExercise);
    // }).catch(err => {
    //     console.log(err);
    //     res.json(err);
    // })

    db.Workout.aggregate([
        // {
        //     $match: {_id: req.params.id} 
        // },
        {
            $set: {
                totalDuration: "1"
            }
        }
    ]).then(result => {
        console.log("Result of Aggregate");
        console.log(result);
        res.json(result);
    });
});

apiRouter.get("/api/workouts/range", (req, res) => {
    console.log("Dash Board to get all information");
    db.Workout.find().sort({ day: -1 }).limit(7).then(dbExercise => {
        res.json(dbExercise);
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
});


apiRouter.post("/api/workouts", (req, res) => {
    console.log("For initExercise function& createWorkout Router");
    console.log(req.body);
    // if(req.body="{}"){
    //     console.log("test");
    // }
    db.Workout.create({ exercises: req.body }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.json(err);
    });
});

apiRouter.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);

    // if(req.params.id === "undefined"){
    //     db.Workout.create({exercises: req.body}).then(result =>{
    //         res.json(result);
    //     }).catch(err => {
    //         console.log(err);
    //         res.json(err);
    //     });
    // }else{
    console.log("There is ID");
    console.log(req.params.id);
    db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log("Aggregate func");
            console.log(req.params.id);

            //   db.Workout.aggregate([
            //     // {
            //     //     $match: {_id: req.params.id} 
            //     // },
            //     {
            //       $set: {
            //         totalDuration : "1"
            //       }   
            //     }
            // ]).then(result =>{
            //     console.log("Result of Aggregate");
            //     console.log(result);
            //     res.json(result);
            // });
            res.json(result);
        }
    });
    // }


});



module.exports = apiRouter;