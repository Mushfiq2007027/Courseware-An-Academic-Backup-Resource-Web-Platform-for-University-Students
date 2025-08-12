// import { useEffect, useState } from "react";
// import { fetchPdfListService } from "@/services";
// import { Eye, FileText } from "lucide-react";

// function LectureSlides() {
// 	const [pdfs, setPdfs] = useState([]);

// 	useEffect(() => {
// 		async function fetchPDFs() {
// 			const response = await fetchPdfListService("lecture");
// 			if (response.success) {
// 				// Sort by courseNo ascending
// 				const sorted = response.data.sort((a, b) =>
// 					a.courseNo.localeCompare(b.courseNo)
// 				);
// 				setPdfs(sorted);
// 			}
// 		}
// 		fetchPDFs();
// 	}, []);

// 	return (
// 		<div className="p-4">
// 			<h2 className="text-4xl font-extrabold my-6 flex justify-center items-center gap-3 text-center">
// 				<FileText className="w-8 h-8" />
// 				Course Materials
// 			</h2>
// 			<table className="w-full table-auto border border-gray-300 mt-10">
// 				<thead>
// 					<tr className="bg-gray-200">
// 						<th className="border-2 border-gray-500 px-4 py-2">
// 							Course Number
// 						</th>
// 						<th className="border-2 border-gray-500 px-4 py-2">Course Title</th>
// 						<th className="border-2 border-gray-500 px-4 py-2">Action</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{pdfs.map((pdf) => (
// 						<tr key={pdf._id}>
// 							<td className="border-2 border-gray-500 px-4 py-2 text-center">
// 								{pdf.courseNo}
// 							</td>
// 							<td className="border-2 border-gray-500 px-4 py-2 text-center">
// 								{pdf.courseTitle}
// 							</td>
// 							<td className="border-2 border-gray-500 px-4 py-2 text-center">
// 								<button
// 									onClick={() =>
// 										window.open(
// 											`http://localhost:5000/uploads/${pdf.fileName}`,
// 											"_blank"
// 										)
// 									}
// 								>
// 									<Eye className="w-5 h-5" />
// 								</button>
// 							</td>
// 						</tr>
// 					))}
// 					{pdfs.length === 0 && (
// 						<tr>
// 							<td colSpan="3" className="text-center py-4">
// 								No PDFs found.
// 							</td>
// 						</tr>
// 					)}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }

// export default LectureSlides;


import { useEffect, useState } from "react";
import { fetchPdfListService } from "@/services";
import { FileText, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function LectureSlides() {
	const [pdfs, setPdfs] = useState([]);

	useEffect(() => {
		async function fetchPDFs() {
			const response = await fetchPdfListService("lecture");
			if (response.success) {
				// Sort by courseNo ascending
				const sorted = response.data.sort((a, b) =>
					a.courseNo.localeCompare(b.courseNo)
				);
				setPdfs(sorted);
			}
		}
		fetchPDFs();
	}, []);

	return (
		<div className="mx-auto p-4">
			<div className="bg-gray-900 text-white p-8 rounded-lg mb-6">
				<h2 className="text-3xl font-bold flex items-center gap-3 justify-center">
					<FileText className="w-7 h-7" />
					Course Materials
				</h2>
			</div>

			<Card className="p-0 shadow-md">
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
											<Button
												variant="ghost"
												onClick={() =>
													window.open(
														`http://localhost:5000/uploads/${pdf.fileName}`,
														"_blank"
													)
												}
												className="p-2"
											>
												<Eye className="w-5 h-5" />
											</Button>
										</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan="3"
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
}

export default LectureSlides;
