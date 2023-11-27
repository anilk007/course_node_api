const Course = require('../../models/course.model');


var util = require('util');

const courseList = async (req, res, next) => {
  try {

    console.log("courselistController is called");
    console.log("courselistController is called req.body :", req.body);

    message = await Course.find();

    console.log("courselistController message :", message);
 
    // res.status(201).json({
    //   success: true,
    //   data: message,
    // });

    res.status(201).send(message);


  } catch (err) {
    console.log("err :", err);
    res.status(400).json({ msg: err });
  }
};





module.exports = courseList;
