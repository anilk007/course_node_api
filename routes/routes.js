const { Router } = require('express');

const {
  register,
  login,
  loginRequired,
  auth,
} = require('../controllers/userController');


const
  courseList
    = require('../controllers/course/courselistController');

const
  viewCourse
    = require('../controllers/course/viewCourseController');

const
  addCourse
    = require('../controllers/course/addCourseController');

const
  updateCourse
    = require('../controllers/course/updateCourseController');

const
  deleteCourse
    = require('../controllers/course/deleteCourseController');


const router = Router();

//  router.get('/courses', courseList);

// why second argument is auth here?

router.route('/courses').get(courseList, auth);

router.route('/courses').post(addCourse, auth);

router.route('/courses/:id').get(viewCourse, auth);

router.route('/courses/:id').put(updateCourse, auth);

router.route('/courses/:id').delete(deleteCourse, auth);

// router.route('/courses').get(courselistController, auth);


router.route('/login').post(login);

router.route('/register').post(register);

router.route('/auth').get(loginRequired, auth);

module.exports = router;
