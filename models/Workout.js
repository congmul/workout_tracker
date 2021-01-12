const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    }, 
    exercises: []
    // totalDuration: Number
  });
  
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;