import { useEffect, useState } from "react";
import { fetchPdfListService } from "@/services";
import { Clipboard, Eye } from "lucide-react";
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

function PreviousYearQuestions() {
	const [pdfs, setPdfs] = useState([]);

	useEffect(() => {
		async function fetchPDFs() {
			const response = await fetchPdfListService("question");
			if (response.success) {
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
					<Clipboard className="w-7 h-7" />
					Previous Year Questions
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

export default PreviousYearQuestions;

