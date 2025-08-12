import { useEffect, useState } from "react";
import axios from "@/api/axiosInstance";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  Eye, Trash2, Clipboard } from "lucide-react";
//import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const LectureSlides = () => {
	//const navigate = useNavigate();
	const [pdfs, setPdfs] = useState([]);
	const [form, setForm] = useState({
		courseNo: "",
		courseTitle: "",
		file: null,
	});

	const fetchPDFs = async () => {
		try {
			const res = await axios.get("/pdf/list/lecture");
			setPdfs(res.data.data);
		} catch (e) {
			console.error("Failed to fetch PDFs", e);
		}
	};

	useEffect(() => {
		fetchPDFs();
	}, []);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: files ? files[0] : value,
		}));
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("courseNo", form.courseNo);
		formData.append("courseTitle", form.courseTitle);
		formData.append("type", "lecture");
		formData.append("file", form.file);

		try {
			await axios.post("/pdf/upload", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			alert("PDF uploaded successfully");
			setForm({ courseNo: "", courseTitle: "", file: null });
			fetchPDFs();
		} catch (e) {
			console.error("Failed to upload PDF", e);
			alert("Upload failed");
		}
	};

	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this PDF?")) return;
		try {
			await axios.delete(`/pdf/delete/${id}`);
			fetchPDFs();
		} catch (e) {
			console.error("Failed to delete PDF", e);
			alert("Delete failed");
		}
	};

	return (
		<div className="p-4 max-w-full">
			{/* Header (same as file-1) */}
			<div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
				{/* <Button
					type="button"
					variant="secondary"
					className="mb-6 flex items-center gap-2"
					onClick={() => navigate(-1)}
				>
					<ArrowLeft className="w-4 h-4" />
					Go Back
				</Button> */}

				<h2 className="text-3xl font-bold flex items-center gap-3 justify-center">
					<Clipboard className="w-7 h-7" />
					Course Materials
				</h2>
			</div>

			{/* Add Material form (styled like file-1) */}
			<Card className="mb-12 border-2">
				<CardContent className="p-6">
					<form onSubmit={handleUpload} className="space-y-6 max-w-full">
						<div className="flex flex-wrap gap-4">
							<div className="flex-1 min-w-[180px]">
								<label
									htmlFor="courseNo"
									className="block text-sm font-medium mb-1"
								>
									Course Number
								</label>
								<Input
									id="courseNo"
									name="courseNo"
									value={form.courseNo}
									onChange={handleChange}
									placeholder="e.g., CSE 2201"
									required
									className="border border-black"
								/>
							</div>

							<div className="flex-1 min-w-[220px]">
								<label
									htmlFor="courseTitle"
									className="block text-sm font-medium mb-1"
								>
									Course Title
								</label>
								<Input
									id="courseTitle"
									name="courseTitle"
									value={form.courseTitle}
									onChange={handleChange}
									placeholder="Course Title"
									required
									className="border-black"
								/>
							</div>

							<div className="flex-1 min-w-[180px]">
								<label
									htmlFor="file"
									className="block text-sm font-medium mb-1"
								>
									Select PDF File
								</label>
								<Input
									id="file"
									name="file"
									type="file"
									accept="application/pdf"
									onChange={handleChange}
									required
									className="border-black"
								/>
							</div>
						</div>

						<div className="flex justify-center">
							<Button
								type="submit"
								className="bg-black hover:bg-black text-white font-medium px-6 py-2 rounded"
							>
								Upload PDF
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>

			{/* PDF Table (styled like file-1) */}
			<Card className="p-0 shadow-md border-2">
				<CardContent className="p-0 overflow-x-auto">
					<Table className="rounded-lg overflow-hidden border border-gray-400">
						<TableHeader className="bg-gray-100">
							<TableRow>
								<TableHead className="text-lg font-semibold border border-gray-400">
									Course Number
								</TableHead>
								<TableHead className="text-lg font-semibold border border-gray-400">
									Course Title
								</TableHead>
								<TableHead className="text-lg font-semibold text-center border border-gray-400">
									Action
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{pdfs.length > 0 ? (
								pdfs.map((pdf) => (
									<TableRow key={pdf._id} className="hover:bg-gray-50">
										<TableCell className="text-base border border-gray-300">
											{pdf.courseNo}
										</TableCell>
										<TableCell className="text-base border border-gray-300">
											{pdf.courseTitle}
										</TableCell>
										<TableCell className="text-center border border-gray-300">
											<div className="flex justify-center gap-x-4">
												<button
													onClick={() =>
														window.open(
															`http://localhost:5000/uploads/${pdf.fileName}`,
															"_blank"
														)
													}
													aria-label="View PDF"
												>
													<Eye className="w-5 h-5" />
												</button>

												<button
													onClick={() => handleDelete(pdf._id)}
													aria-label="Delete PDF"
												>
													<Trash2 className="w-5 h-5" />
												</button>
											</div>
										</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={3}
										className="text-center py-6 text-base border border-gray-300"
									>
										No PDFs found.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
};

export default LectureSlides;
