const express = require("express");
const {
	addNewCourse,
	getAllCourses,
	getAllUsers,
	getCourseDetailsByID,
	updateCourseByID,
	deleteCourseById,
	//deleteAnUser,
	deleteUserById,
} = require("../../controllers/instructor-controller/course-controller");
const router = express.Router();

router.post("/add", addNewCourse);
router.get("/get", getAllCourses);
router.get("/get/details/:id", getCourseDetailsByID);
router.put("/update/:id", updateCourseByID);

// ADDED
router.delete("/delete/:id", deleteCourseById);
router.get("/get-all-users", getAllUsers);
router.delete("/delete-a-user/:id", deleteUserById);

module.exports = router;
