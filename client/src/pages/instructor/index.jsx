import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import {
	fetchInstructorCourseListService,
	getAllUsersService,
} from "@/services";
import { BarChart, Book, Clipboard, FileText, ListCheck, ListChecks, LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function InstructorDashboardpage() {
	const [activeTab, setActiveTab] = useState("dashboard");
	const { resetCredentials } = useContext(AuthContext);
	const { instructorCoursesList, setInstructorCoursesList } =
		useContext(InstructorContext);
	const { usersList, setUsersList } = useContext(InstructorContext);
	const navigate = useNavigate();

	async function fetchAllCourses() {
		const response = await fetchInstructorCourseListService();
		if (response?.success) setInstructorCoursesList(response?.data);
	}

	// ADDED
	async function fetchAllUsers() {
		const response = await getAllUsersService();
		if (response?.success) setUsersList(response?.data);
		console.log("LOOK HERE!!!");
		console.log(response.data);
		setUsersList(response.data);
	}

	useEffect(() => {
		fetchAllCourses();

		// ADDED
		fetchAllUsers();
	}, []);

	const menuItems = [
		{
			icon: BarChart,
			label: "Dashboard",
			value: "dashboard",
			component: (
				<InstructorDashboard
					listOfCourses={instructorCoursesList}
					usersList={usersList}
				/>
			),
		},
		{
			icon: Book,
			label: "Courses",
			value: "courses",
			component: (
				<InstructorCourses
					listOfCourses={instructorCoursesList}
					usersList={usersList}
				/>
			),
		},
		{
			icon: LogOut,
			label: "Logout",
			value: "logout",
			component: null,
		},
	];

	function handleLogout() {
		resetCredentials();
		sessionStorage.clear();
	}

	return (
		<div className="flex h-full min-h-screen bg-gray-100">
			<aside className="w-64 bg-white shadow-md hidden md:block">
				<div className="p-4">
					<h2 className="text-2xl font-bold mb-4">Instructor View</h2>
					<nav>
						{menuItems.map((menuItem) => (
							<Button
								className="w-full justify-start mb-2"
								key={menuItem.value}
								variant={activeTab === menuItem.value ? "secondary" : "ghost"}
								onClick={
									menuItem.value === "logout"
										? handleLogout
										: () => setActiveTab(menuItem.value)
								}
							>
								<menuItem.icon className="mr-2 h-4 w-4" />
								{menuItem.label}
							</Button>
						))}
						<Button
							type="button"
							//className="w-full justify-start mb-2"
							variant="secondary"
							className="w-full justify-start mb-2"
							onClick={() => navigate("/instructor/previous-year-questions")}
						>
							<Clipboard className="w-8 h-8" />
							Previous Year Questions
						</Button>

						<Button
							type="button"
							//className="w-full justify-start mb-2"
							variant="secondary"
							className="w-full justify-start mb-2"
							onClick={() => navigate("/instructor/lecture-slides")}
						>
							<FileText className="w-8 h-8" />
							Course Materials
						</Button>
					</nav>
				</div>
			</aside>
			<main className="flex-1 p-8 overflow-y-auto">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>
					<Tabs value={activeTab} onValueChange={setActiveTab}>
						{menuItems.map((menuItem) => (
							<TabsContent value={menuItem.value}>
								{menuItem.component !== null ? menuItem.component : null}
							</TabsContent>
						))}
					</Tabs>
				</div>
			</main>
		</div>
	);
}

export default InstructorDashboardpage;
