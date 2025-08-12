import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	courseCurriculumInitialFormData,
	courseLandingInitialFormData,
} from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useToast } from "@/hooks/use-toast";
import { deleteCourseByIdService } from "@/services";
import { Delete, Edit } from "lucide-react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

function InstructorCourses({ listOfCourses }) {
	const navigate = useNavigate();
	const { toast } = useToast();
	const {
		setCurrentEditedCourseId,
		setCourseLandingFormData,
		setCourseCurriculumFormData,
	} = useContext(InstructorContext);

	return (
		<Card>
			<CardHeader className="flex justify-between flex-row items-center">
				<CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
				<Button
					onClick={() => {
						setCurrentEditedCourseId(null);
						setCourseLandingFormData(courseLandingInitialFormData);
						setCourseCurriculumFormData(courseCurriculumInitialFormData);
						navigate("/instructor/create-new-course");
					}}
					className="p-6"
				>
					Create New Course
				</Button>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Course No.</TableHead>
								<TableHead>Course Title</TableHead>
								<TableHead>Credit</TableHead>
								{/* <TableHead>Type</TableHead> */}
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{listOfCourses && listOfCourses.length > 0
								? listOfCourses.map((course) => (
										<TableRow key={course.courseId}>
											<TableCell className="font-medium">
												{course?.courseNumber}
											</TableCell>
											<TableCell className="font-medium">
												{course?.title}
											</TableCell>
											{/* <TableCell>{course?.students?.length}</TableCell> */}
											<TableCell className="font-medium">
												{course?.credit}
											</TableCell>
											{/* <TableCell>{course?.pricing}</TableCell> */}
											<TableCell className="text-right space-x-2">
												<Button
													onClick={() => {
														navigate(`/instructor/edit-course/${course?._id}`);
													}}
													variant="ghost"
													className="p-3"
												>
													<Edit className="w-8 h-8 stroke-[3]" />
												</Button>

												{/* ADDED */}
												<Button
													onClick={() => {
														deleteCourseByIdService(course?._id);
														navigate("/");
														toast({
															title: "✅ Course deleted successfully!",
														});
													}}
													variant="ghost"
													className="p-3"
												>
													<Delete className="w-8 h-8 stroke-[3]" />
												</Button>
											</TableCell>
										</TableRow>
								  ))
								: null}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}

export default InstructorCourses;
