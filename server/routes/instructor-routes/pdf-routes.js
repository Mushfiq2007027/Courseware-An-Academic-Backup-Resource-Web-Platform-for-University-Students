const express = require("express");
const multer = require("multer");
const path = require("path");

const {
	uploadPDF,
	getPDFsByType,
	deletePDF,
} = require("../../controllers/instructor-controller/pdf-controller");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + path.extname(file.originalname));
	},
});
const upload = multer({ storage });

// Routes
router.post("/upload", upload.single("file"), uploadPDF);
router.get("/list/:type", getPDFsByType); // type = "question" or "lecture"
router.delete("/delete/:id", deletePDF);

module.exports = router;
