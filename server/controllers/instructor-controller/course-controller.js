const Course = require("../../models/Course");
const User = require("../../models/User");

const addNewCourse = async (req, res) => {
	try {
		const courseData = req.body;
		const newlyCreatedCourse = new Course(courseData);
		const saveCourse = await newlyCreatedCourse.save();

		if (saveCourse) {
			res.status(201).json({
				success: true,
				message: "Course saved successfully!",
				data: saveCourse,
			});
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred!",
		});
	}
};

const getAllCourses = async (req, res) => {
	try {
		const coursesList = await Course.find({});

		res.status(200).json({
			success: true,
			data: coursesList,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred!",
		});
	}
};

const getCourseDetailsByID = async (req, res) => {
	try {
		const { id } = req.params;
		const courseDetails = await Course.findById(id);

		if (!courseDetails) {
			return res.status(404).json({
				success: false,
				message: "Course not found!",
			});
		}

		res.status(200).json({
			success: true,
			data: courseDetails,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred!",
		});
	}
};

const updateCourseByID = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedCourseData = req.body;

		const updatedCourse = await Course.findByIdAndUpdate(
			id,
			updatedCourseData,
			{ new: true }
		);

		if (!updatedCourse) {
			return res.status(404).json({
				success: false,
				message: "Course not found!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Course updated successfully!",
			data: updatedCourse,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred!",
		});
	}
};

// ADDED
const deleteCourseById = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteCourseData = req.body;

		const deleteCourse = await Course.findByIdAndDelete(id, deleteCourseData);

		if (!deleteCourse) {
			return res.status(404).json({
				success: false,
				message: "Course not found!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Course deleted successfully!",
			data: deleteCourse,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred!",
		});
	}
};

const getAllUsers = async (req, res) => {
	try {
		const usersList = await User.find({});

		res.status(200).json({
			success: true,
			data: usersList,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred!",
		});
	}
};

const deleteUserById = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteUserData = req.body;

		const deleteUser = await User.findByIdAndDelete(id, deleteUserData);

		if (!deleteUser) {
			return res.status(404).json({
				success: false,
				message: "Course not found!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Course deleted successfully!",
			data: deleteUser,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Some error occurred!",
		});
	}
};

module.exports = {
	addNewCourse,
	getAllCourses,
	updateCourseByID,
	deleteCourseById,
	getCourseDetailsByID,

	// ADDED
	getAllUsers,
	deleteUserById,
};
