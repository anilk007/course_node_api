const Course = require('../../models/course.model');

var util = require('util');
const { route } = require('express/lib/application');

const viewCourse = async (req, res, next) => {

  let status;
  let message;
  const { id } = req.params;
  try {

    console.log("updateCourse is called");
    console.log("updateCourse is called req.body :", req.body);

    const {  title, slug, authorId, category } = req.body;

    let course = await Course.findOne({ id: id});

    console.log("course", course);

    //const course = new Course({ id, title, slug, authorId, category });
route
    
    status = 200;
    message = course;
  }
  catch (err) {
    console.log('error', err),

      status = 400;
    message = 'Bad Request'
  }
  res.status(status).send(message);


};

module.exports = viewCourse;
