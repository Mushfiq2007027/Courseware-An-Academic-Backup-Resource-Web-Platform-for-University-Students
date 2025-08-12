/* eslint-disable no-unused-vars */
// import { Skeleton } from "@/components/ui/skeleton";
// import { StudentContext } from "@/context/student-context";
// import {
// 	checkCoursePurchaseInfoService,
// 	//createPaymentService,
// 	fetchStudentViewCourseDetailsService,
// } from "@/services";
// import { Button } from "@/components/ui/button";
// import { Calendar, CheckCircle, Lock, PlayCircle } from "lucide-react";

// import { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { yearSemesters } from "@/config";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
// 	Dialog,
// 	DialogClose,
// 	DialogContent,
// 	DialogFooter,
// 	DialogHeader,
// 	DialogTitle,
// } from "@/components/ui/dialog";
// import VideoPlayer from "@/components/video-player";
// import { AuthContext } from "@/context/auth-context";

// function StudentViewCourseDetailsPage() {
// 	const {
// 		studentViewCourseDetails,
// 		setStudentViewCourseDetails,
// 		currentCourseDetailsId,
// 		setCurrentCourseDetailsId,
// 		loadingState,
// 		setLoadingState,
// 	} = useContext(StudentContext);

// 	const { auth } = useContext(AuthContext);
// 	//the following is for navigating. Must import  useNavigate from react-router-dom
// 	const navigate = useNavigate();

// 	const [displayCurrentVideoFreePreview, setDisplayCurrentVideoFreePreview] =
// 		useState(null);
// 	const [showFreePreviewDialog, setShowFreePreviewDialog] = useState(false);

// 	// eslint-disable-next-line no-unused-vars
// 	const [approvalUrl, setApprovalUrl] = useState("");

// 	const { id } = useParams();
// 	const location = useLocation();

// 	async function fetchStudentViewCourseDetails() {
// 		const checkCoursePurchaseInfoResponse =
// 			await checkCoursePurchaseInfoService(
// 				currentCourseDetailsId,
// 				auth?.user._id
// 			);

// 		if (
// 			checkCoursePurchaseInfoResponse?.success &&
// 			checkCoursePurchaseInfoResponse?.data
// 		) {
// 			navigate(`/course-progress/${currentCourseDetailsId}`);
// 			return;
// 		}

// 		const response = await fetchStudentViewCourseDetailsService(
// 			currentCourseDetailsId
// 		);
// 		if (response?.success) {
// 			setStudentViewCourseDetails(response?.data);
// 			setLoadingState(false);
// 		} else {
// 			setStudentViewCourseDetails(null);
// 			setLoadingState(false);
// 		}
// 	}

// 	function handleSetFreePreview(getCurrentVideoInfo) {
// 		console.log(getCurrentVideoInfo);
// 		//setDisplayCurrentVideoFreePreview(getCurrentVideoInfo?.videoUrl);
// 		setDisplayCurrentVideoFreePreview(getCurrentVideoInfo);
// 	}
// 	// async function handleCreatePayment() {
// 	// 	const paymentPayload = {
// 	// 		userId: auth?.user?._id,
// 	// 		userName: auth?.user?.userName,
// 	// 		userEmail: auth?.user?.userEmail,
// 	// 		orderStatus: "pending",
// 	// 		paymentMethod: "paypal",
// 	// 		paymentStatus: "initiated",
// 	// 		orderDate: new Date(),
// 	// 		paymentId: "",
// 	// 		payerId: "",
// 	// 		instructorId: studentViewCourseDetails?.instructorId,
// 	// 		instructorName: studentViewCourseDetails?.instructorName,
// 	// 		courseImage: studentViewCourseDetails?.image,
// 	// 		courseTitle: studentViewCourseDetails?.title,
// 	// 		courseId: studentViewCourseDetails?._id,
// 	// 		coursePricing: studentViewCourseDetails?.credit,
// 	// 	};

// 	// 	console.log(paymentPayload, "paymentPayload");
// 	// 	const response = await createPaymentService(paymentPayload);

// 	// 	if (response.success) {
// 	// 		sessionStorage.setItem(
// 	// 			"currentOrderId",
// 	// 			JSON.stringify(response?.data?.orderId)
// 	// 		);
// 	// 		setApprovalUrl(response?.data?.approveUrl);
// 	// 	}
// 	// }

// 	{
// 		/* //Directly navigate to student-courses without payment gateways
// 	function navigateToStudentCourses() {
// 		navigate("/student-courses");
// 	} */
// 	}

// 	useEffect(() => {
// 		if (displayCurrentVideoFreePreview !== null) setShowFreePreviewDialog(true);
// 	}, [displayCurrentVideoFreePreview]);

// 	useEffect(() => {
// 		if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
// 	}, [currentCourseDetailsId]);

// 	useEffect(() => {
// 		if (id) setCurrentCourseDetailsId(id);
// 	}, [id]);

// 	useEffect(() => {
// 		if (!location.pathname.includes("course/details"))
// 			setStudentViewCourseDetails(null), setCurrentCourseDetailsId(null);
// 	}, [location.pathname]);

// 	if (loadingState) return <Skeleton />;

// 	if (approvalUrl !== "") {
// 		window.location.href = approvalUrl;
// 	}

// 	// Find the label corresponding to the yearSemester id
// 	const yearSemesterLabel = yearSemesters.find(
// 		(ys) => ys.id === studentViewCourseDetails?.yearSemester
// 	)?.label;

// 	//const getIndexOfFreePreviewUrl =
// 	//studentViewCourseDetails !== null
// 	{
// 		/*? studentViewCourseDetails?.curriculum?.findIndex(
// 					(item) => item.freePreview
// 			  )
// 			: -1; */
// 	}

// 	return (
// 		<div className=" mx-auto p-4">
// 			<div className="bg-gray-900 text-white p-8 rounded-t-lg">
// 				<h1 className="text-3xl font-bold mb-4">
// 					{studentViewCourseDetails?.title}
// 				</h1>
// 				<p className="text-xl mb-4">Course Teachers: {studentViewCourseDetails?.subtitle}</p>
// 				<div className="flex items-center space-x-4 mt-2 text-sm">
// 					{/*  <span>Uploaded and Managed By Admin {studentViewCourseDetails?.instructorName}</span> */}
// 					<span className="flex items-center">
// 						<Calendar className="mr-1 h-4 w-4" />
// 						{yearSemesterLabel}
// 					</span>
// 					<span>Uploaded On {studentViewCourseDetails?.date.split("T")[0]}</span>
// 					{/*  <span>
// 						{studentViewCourseDetails?.students.length}{" "}
// 						{studentViewCourseDetails?.students.length <= 1
// 							? "Student"
// 							: "Students"}
// 					</span> */}
// 				</div>
// 			</div>
// 			<div className="flex flex-col md:flex-row gap-8 mt-8">
// 				<main className="flex-grow">
// 					<Card className="mb-8">
// 						<CardHeader>
// 							<CardTitle>Course Description</CardTitle>
// 						</CardHeader>
// 						<CardContent>{studentViewCourseDetails?.description}</CardContent>
// 					</Card>
// 					<Card className="mb-8">
// 						<CardHeader>
// 							<CardTitle>Course Learning Outcomes</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// 								{studentViewCourseDetails?.outcomes
// 									.split(">")
// 									.map((outcome, index) => (
// 										<li key={index} className="flex items-start">
// 											<CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
// 											<span>{outcome}</span>
// 										</li>
// 									))}
// 							</ul>
// 						</CardContent>
// 					</Card>

// 					<Card className="mb-8">
// 						<CardHeader>
// 							<CardTitle>Course Curriculum</CardTitle>
// 						</CardHeader>
// 						<CardContent>
// 							{studentViewCourseDetails?.curriculum?.map(
// 								// eslint-disable-next-line no-unused-vars
// 								(curriculumItem, index) => (
// 									<li
// 										className={`${
// 											curriculumItem?.freePreview
// 												? "cursor-pointer"
// 												: "cursor-not-allowed"
// 										} flex items-center mb-4`}
// 										onClick={
// 											curriculumItem?.freePreview
// 												? () => handleSetFreePreview(curriculumItem)
// 												: null
// 										}
// 									>
// 										{curriculumItem?.freePreview ? (
// 											<PlayCircle className="mr-2 h-4 w-4" />
// 										) : (
// 											<Lock className="mr-2 h-4 w-4" />
// 										)}
// 										<span>{curriculumItem?.title}</span>
// 									</li>
// 								)
// 							)}
// 						</CardContent>
// 					</Card>
// 				</main>

// 				{/* <aside className="w-full md:w-[500px]">
// 					<Card className="sticky top-4">
// 						<CardContent className="p-6">
// 							<div className="aspect-video mb-4 rounded-lg flex items-center justify-center">
// 								<VideoPlayer
// 									url={
// 										getIndexOfFreePreviewUrl !== -1
// 											? studentViewCourseDetails?.curriculum[
// 													getIndexOfFreePreviewUrl
// 											  ].videoUrl
// 											: ""
// 									}
// 									width="450px"
// 									height="200px"
// 								/>
// 							</div>
// 							<div className="mb-4">
// 								<span className="text-3xl font-bold">
// 									Course Credit:{studentViewCourseDetails?.credit}
// 								</span>
// 							</div>
// 							<Button
// 								onClick={handleCreatePayment}
// 								 onClick={() =>
// 									navigate(
// 										`/course-progress/${studentViewCourseDetails?._id}`
// 									)
// 								}
// 								className="w-full"
// 							>
// 								Get Better View for ${studentViewCourseDetails?.credit}
// 							</Button>
// 						</CardContent>
// 					</Card>
// 				</aside> */}
// 			</div>
// 			<Dialog
// 				open={showFreePreviewDialog}
// 				onOpenChange={() => {
// 					setShowFreePreviewDialog(false);
// 					setDisplayCurrentVideoFreePreview(null);
// 				}}
// 			>
// 				<DialogContent className="w-[800px]">
// 					<DialogHeader className="w-full flex justify-center">
// 						<DialogTitle className="text-center text-2xl font-bold">
// 							Lecture Video
// 						</DialogTitle>
// 					</DialogHeader>
// 					<div className="aspect-video rounded-lg flex items-center justify-center">
// 						<VideoPlayer
// 							url={displayCurrentVideoFreePreview?.videoUrl}
// 							width="450px"
// 							height="200px"
// 						/>
// 					</div>
// 					{/*<div className="flex flex-col gap-2">
// 						{studentViewCourseDetails?.curriculum
// 							?.filter((item) => item.freePreview)
// 							.map((filteredItem) => (
// 								<p
// 									onClick={() => handleSetFreePreview(filteredItem)}
// 									className="cursor-pointer text-[16px] font-medium"
// 								>
// 									{filteredItem?.title}
// 								</p>
// 							))}
// 					</div>*/}
// 					{displayCurrentVideoFreePreview && (
// 						<div className="mt-4 text-lg font-semibold text-left w-full">
// 							Lecture Title: {displayCurrentVideoFreePreview.title}
// 						</div>
// 					)}

// 					<DialogFooter className="sm:justify-start">
// 						<DialogClose asChild>
// 							<Button type="button" variant="secondary">
// 								Close
// 							</Button>
// 						</DialogClose>
// 					</DialogFooter>
// 				</DialogContent>
// 			</Dialog>
// 		</div>
// 	);
// }

// export default StudentViewCourseDetailsPage;

import { Skeleton } from "@/components/ui/skeleton";
import { StudentContext } from "@/context/student-context";
import {
	checkCoursePurchaseInfoService,
	fetchStudentViewCourseDetailsService,
} from "@/services";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Lock, PlayCircle } from "lucide-react";

import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { yearSemesters } from "@/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import VideoPlayer from "@/components/video-player";
import { AuthContext } from "@/context/auth-context";

function StudentViewCourseDetailsPage() {
	const {
		studentViewCourseDetails,
		setStudentViewCourseDetails,
		currentCourseDetailsId,
		setCurrentCourseDetailsId,
		loadingState,
		setLoadingState,
	} = useContext(StudentContext);

	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();

	const [displayCurrentVideoFreePreview, setDisplayCurrentVideoFreePreview] =
		useState(null);
	const [showFreePreviewDialog, setShowFreePreviewDialog] = useState(false);

	const [showPrerequisiteDialog, setShowPrerequisiteDialog] = useState(false);
	const [prerequisiteMessage, setPrerequisiteMessage] = useState("");
	const [prerequisiteConfirmed, setPrerequisiteConfirmed] = useState(false);
	const [approvalUrl, setApprovalUrl] = useState("");

	// NEW state to hide Yes/No after "No" clicked
	const [showOnlyCloseButton, setShowOnlyCloseButton] = useState(false);

	const { id } = useParams();
	const location = useLocation();

	async function fetchStudentViewCourseDetails() {
		const checkCoursePurchaseInfoResponse =
			await checkCoursePurchaseInfoService(
				currentCourseDetailsId,
				auth?.user._id
			);

		if (
			checkCoursePurchaseInfoResponse?.success &&
			checkCoursePurchaseInfoResponse?.data
		) {
			navigate(`/course-progress/${currentCourseDetailsId}`);
			return;
		}

		const response = await fetchStudentViewCourseDetailsService(
			currentCourseDetailsId
		);
		if (response?.success) {
			setStudentViewCourseDetails(response?.data);
			setLoadingState(false);
		} else {
			setStudentViewCourseDetails(null);
			setLoadingState(false);
		}
	}

	const hasPrerequisite =
		Boolean(studentViewCourseDetails?.welcomeMessage) &&
		studentViewCourseDetails?.welcomeMessage
			?.toString()
			.trim()
			.toLowerCase() !== "none";

	function handleSetFreePreview(curriculumItem, index) {
		if (!hasPrerequisite || prerequisiteConfirmed) {
			setDisplayCurrentVideoFreePreview(curriculumItem);
			return;
		}

		if (index === 0) {
			setShowPrerequisiteDialog(true);
			setDisplayCurrentVideoFreePreview(curriculumItem);
			setPrerequisiteMessage("");
			setShowOnlyCloseButton(false); // reset close button state
		}
	}

	function handlePrerequisiteAnswer(answer) {
		if (answer === "yes") {
			setPrerequisiteConfirmed(true);
			setShowFreePreviewDialog(true);
			setPrerequisiteMessage("");
			setShowPrerequisiteDialog(false);
		} else {
			setPrerequisiteMessage("Please finish that course first");
			setShowOnlyCloseButton(true); // show only Close button
		}
	}

	useEffect(() => {
		if (displayCurrentVideoFreePreview !== null && !showPrerequisiteDialog) {
			setShowFreePreviewDialog(true);
		}
	}, [displayCurrentVideoFreePreview, showPrerequisiteDialog]);

	useEffect(() => {
		if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
	}, [currentCourseDetailsId]);

	useEffect(() => {
		if (id) setCurrentCourseDetailsId(id);
	}, [id]);

	useEffect(() => {
		if (!location.pathname.includes("course/details")) {
			setStudentViewCourseDetails(null);
			setCurrentCourseDetailsId(null);
		}
	}, [location.pathname]);

	if (loadingState) return <Skeleton />;

	if (approvalUrl !== "") {
		window.location.href = approvalUrl;
	}

	const yearSemesterLabel = yearSemesters.find(
		(ys) => ys.id === studentViewCourseDetails?.yearSemester
	)?.label;

	return (
		<div className="mx-auto p-4">
			<div className="bg-gray-900 text-white p-8 rounded-t-lg">
				<h1 className="text-3xl font-bold mb-4 flex items-baseline">
					<span>{studentViewCourseDetails?.title}</span>
					{studentViewCourseDetails?.welcomeMessage &&
						studentViewCourseDetails?.welcomeMessage.toLowerCase() !==
							"none" && (
							<span className="ml-4 text-2xl font-bold text-white-300">
								(Pre-Requisite: {studentViewCourseDetails?.welcomeMessage})
							</span>
						)}
				</h1>

				<p className="text-xl mb-4">
					Course Teachers: {studentViewCourseDetails?.subtitle}
				</p>
				<div className="flex items-center space-x-4 mt-2 text-sm">
					<span className="flex items-center">
						<Calendar className="mr-1 h-4 w-4" />
						{yearSemesterLabel}
					</span>
					<span>
						Uploaded On {studentViewCourseDetails?.date.split("T")[0]}
					</span>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-8 mt-8">
				<main className="flex-grow">
					<Card className="mb-8">
						<CardHeader>
							<CardTitle>Course Description</CardTitle>
						</CardHeader>
						<CardContent>{studentViewCourseDetails?.description}</CardContent>
					</Card>
					<Card className="mb-8">
						<CardHeader>
							<CardTitle>Course Learning Outcomes</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
								{studentViewCourseDetails?.outcomes
									.split(">")
									.map((outcome, index) => (
										<li key={index} className="flex items-start">
											<CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
											<span>{outcome}</span>
										</li>
									))}
							</ul>
						</CardContent>
					</Card>

					<Card className="mb-8">
						<CardHeader>
							<CardTitle>Course Curriculum</CardTitle>
						</CardHeader>
						<CardContent>
							{studentViewCourseDetails?.curriculum?.map(
								(curriculumItem, index) => {
									const clickable =
										curriculumItem?.freePreview &&
										(!hasPrerequisite || prerequisiteConfirmed || index === 0);

									const disabledTooltip =
										hasPrerequisite &&
										!prerequisiteConfirmed &&
										index !== 0 &&
										curriculumItem?.freePreview
											? "Please confirm prerequisite first"
											: "";

									return (
										<li
											key={index}
											className={`flex items-center mb-4 ${
												curriculumItem?.freePreview
													? clickable
														? "cursor-pointer"
														: "cursor-not-allowed opacity-50"
													: "cursor-not-allowed opacity-50"
											}`}
											onClick={
												clickable
													? () => handleSetFreePreview(curriculumItem, index)
													: null
											}
											title={disabledTooltip}
										>
											{curriculumItem?.freePreview ? (
												<PlayCircle className="mr-2 h-4 w-4" />
											) : (
												<Lock className="mr-2 h-4 w-4" />
											)}
											<span>{curriculumItem?.title}</span>
										</li>
									);
								}
							)}
						</CardContent>
					</Card>
				</main>
			</div>

			{/* Prerequisite Confirmation Dialog */}
			<Dialog
				open={showPrerequisiteDialog}
				onOpenChange={(open) => {
					if (!open) {
						setShowPrerequisiteDialog(false);
						setPrerequisiteMessage("");
						setDisplayCurrentVideoFreePreview(null);
						setShowOnlyCloseButton(false);
					}
				}}
			>
				<DialogContent className="w-[400px]">
					<DialogHeader>
						<DialogTitle className="text-center text-xl font-bold">
							Course Prerequisite
						</DialogTitle>
					</DialogHeader>
					<div className="my-4 text-center">
						<p>
							This course prerequisite is{" "}
							<strong>{studentViewCourseDetails?.welcomeMessage}</strong>. Have
							you finished that course?
						</p>
						{prerequisiteMessage && (
							<p className="mt-4 text-red-600 font-semibold">
								{prerequisiteMessage}
							</p>
						)}
					</div>
					<DialogFooter className="flex justify-center space-x-4">
						{showOnlyCloseButton ? (
							<DialogClose asChild>
								<Button variant="secondary">Close</Button>
							</DialogClose>
						) : (
							<>
								<Button
									variant="outline"
									onClick={() => handlePrerequisiteAnswer("no")}
								>
									No
								</Button>
								<Button onClick={() => handlePrerequisiteAnswer("yes")}>
									Yes
								</Button>
							</>
						)}
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Video Dialog */}
			<Dialog
				open={showFreePreviewDialog}
				onOpenChange={() => {
					setShowFreePreviewDialog(false);
					setDisplayCurrentVideoFreePreview(null);
				}}
			>
				<DialogContent className="w-[800px]">
					<DialogHeader className="w-full flex justify-center">
						<DialogTitle className="text-center text-2xl font-bold">
							Lecture Video
						</DialogTitle>
					</DialogHeader>
					<div className="aspect-video rounded-lg flex items-center justify-center">
						<VideoPlayer
							url={displayCurrentVideoFreePreview?.videoUrl}
							width="450px"
							height="200px"
						/>
					</div>
					{displayCurrentVideoFreePreview && (
						<div className="mt-4 text-lg font-semibold text-left w-full">
							Lecture Title: {displayCurrentVideoFreePreview.title}
						</div>
					)}

					<DialogFooter className="sm:justify-start">
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Close
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default StudentViewCourseDetailsPage;
