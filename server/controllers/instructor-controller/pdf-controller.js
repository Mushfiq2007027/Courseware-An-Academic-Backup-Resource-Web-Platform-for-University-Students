const Pdf = require("../../models/PDFTemp");
const path = require("path");
const fs = require("fs");

// Upload PDF
const uploadPDF = async (req, res) => {
	try {
		const { courseNo, courseTitle, type } = req.body;
		const fileName = req.file.filename;

		const newPdf = new Pdf({
			courseNo,
			courseTitle,
			type,
			fileName,
		});
		await newPdf.save();

		res
			.status(201)
			.json({ success: true, message: "PDF uploaded", data: newPdf });
	} catch (e) {
		console.log(e);
		res.status(500).json({ success: false, message: "Failed to upload PDF" });
	}
};

// Get all PDFs by type
const getPDFsByType = async (req, res) => {
	try {
		const { type } = req.params;

		const pdfs = await Pdf.find({ type }).sort({ courseNo: 1 }); // sorted by course number
		res.status(200).json({ success: true, data: pdfs });
	} catch (e) {
		console.log(e);
		res.status(500).json({ success: false, message: "Failed to fetch PDFs" });
	}
};

// Delete a PDF
const deletePDF = async (req, res) => {
	try {
		const { id } = req.params;
		const pdf = await Pdf.findById(id);
		if (!pdf)
			return res.status(404).json({ success: false, message: "PDF not found" });

		// Delete file from /uploads
		const filePath = path.join(__dirname, `../../uploads/${pdf.fileName}`);
		fs.unlinkSync(filePath);

		await Pdf.findByIdAndDelete(id);

		res
			.status(200)
			.json({ success: true, message: "PDF deleted successfully" });
	} catch (e) {
		console.log(e);
		res.status(500).json({ success: false, message: "Failed to delete PDF" });
	}
};

module.exports = {
	uploadPDF,
	getPDFsByType,
	deletePDF,
};
