const mongoose = require("mongoose")

const courseProgress = new mongoose.Schema({
  courseID: {
    //course.js model id is referred
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userId: {
    //user.js model id is referred
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
})

module.exports = mongoose.model("courseProgress", courseProgress)
