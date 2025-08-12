const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
	courseNo: {
		type: String,
		required: true,
	},
	courseTitle: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ["question", "lecture"],
		required: true,
	},
	fileName: {
		type: String,
		required: true,
	},
	uploadedAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Pdf", PdfSchema);
