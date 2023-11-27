const Course = require('../../models/course.model');

var util = require('util');
const { route } = require('express/lib/application');

const deleteCourse = async (req, res, next) => {

  let status;
  let message;
  const { id } = req.params;
  console.log("deleteCourse is called id :", id);

  try {
    Course.deleteOne({ id: id }, function (err, results) {
      console.log("error err :", err);
      console.log("results :", results);
      res.status(200).send('Deleted.');
    });

  } catch (error) {
    console.log("error while deleting");
    console.log(error)
    status = 400;
    res.status(400).send({ error });

    message = 'Bad request'
  }
 // res.status(status).send(message);




};
module.exports = deleteCourse;
