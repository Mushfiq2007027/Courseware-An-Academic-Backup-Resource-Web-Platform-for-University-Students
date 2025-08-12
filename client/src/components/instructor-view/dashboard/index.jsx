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
import { useToast } from "@/hooks/use-toast";
import { deleteUserByIdService } from "@/services";
//import { Delete, DollarSign, Users } from "lucide-react";
import { Delete } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InstructorDashboard({ listOfCourses, usersList }) {
	const navigate = useNavigate();
	const { toast } = useToast();

	function calculateTotalStudentsAndCredit() {
		const { totalStudents, totalCredit, studentList } = listOfCourses.reduce(
			(acc, course) => {
				const studentCount = course.students.length;
				acc.totalStudents += studentCount;
				acc.totalCredit += course.credit; // * studentCount;

				course.students.forEach((student) => {
					acc.studentList.push({
						courseTitle: course.title,
						studentName: student.studentName,
						studentEmail: student.studentEmail,
					});
				});

				return acc;
			},
			{
				totalStudents: 0,
				totalCredit: 0,
				studentList: [],
			}
		);

		return {
			totalCredit,
			totalStudents,
			studentList,
		};
	}

	const config = [
		{
			//icon: Users,
			label: "Total Students",
			value: usersList.length - 1,
			// value: calculateTotalStudentsAndCredit().totalStudents,
		},
		{
			//icon: DollarSign,
			label: "Total Course Credits",
			value: calculateTotalStudentsAndCredit().totalCredit,
		},
	];

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
				{config.map((item, index) => (
					<Card key={index}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								{item.label}
							</CardTitle>
							{/* <item.icon className="h-4 w-4 text-muted-foreground" /> */}
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{item.value}</div>
						</CardContent>
					</Card>
				))}
			</div>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						User List
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<Table className="w-full">
							<TableHeader>
								<TableRow>
									<TableHead className="font-extrabold">User Name</TableHead>
									<TableHead className="font-extrabold">User Email</TableHead>
									<TableHead className="font-extrabold">User Role</TableHead>
									<TableHead className="font-extrabold">Actions</TableHead>
								</TableRow>
							</TableHeader>
							{/* ADDED */}
							<TableBody>
								{usersList.map(({ _id, userName, userEmail, role }) => (
									<TableRow key={userName}>
										<TableCell className="font-medium">{userName}</TableCell>
										<TableCell>{userEmail}</TableCell>
										<TableCell>{role}</TableCell>
										<TableCell className="">
											{/* ADDED */}
											{role === "user" ? (
												<Button
													onClick={() => {
														deleteUserByIdService(_id);
														navigate("/");
														toast({
															title: "✅ User deleted successfully!",
														});
													}}
													variant="ghost"
													className="p-3"
												>
													<Delete className="w-8 h-8 stroke-[3]" />
												</Button>
											) : (
												<p className="font-bold">N/A</p>
											)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default InstructorDashboard;
