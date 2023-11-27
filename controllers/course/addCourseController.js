const Course = require('../../models/course.model');

var util = require('util');

const addCourse = async (req, res, next) => {

  let status;
  let message;
  
  try {

    console.log("addCourseController is called");
    console.log("addCourseController is called req.body :", req.body);

    const { id, title, slug, authorId, category } = req.body;

   

    console.log('hello1')
    const course = new Course({ id, title, slug, authorId, category });
    await course.save();
    status = 200;
    message = ' course saved'
  }
  catch (err) {
    console.log('error', err),

      status = 400;
    message = 'Bad Request'
  }
  res.status(status).send(message);


};

module.exports = addCourse;
