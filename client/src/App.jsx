import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import RouteGuard from "./components/route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardpage from "./pages/instructor";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentHomepage from "./pages/student/home";
import NotFoundPage from "./pages/not-found";
import AddNewCoursePage from "./pages/instructor/add-new-course";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";
import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";
import PreviousYearQuestions from "./pages/instructor/PreviousYearQuestions";
import LectureSlides from "./pages/instructor/LectureSlides";
import StudentPreviousYearQuestions from "./pages/student/PreviousYearQuestions";
import StudentLectureSlides from "./pages/student/LectureSlides";


function App() {
	const { auth } = useContext(AuthContext);

	return (
		<Routes>
			<Route
				path="/auth"
				element={
					<RouteGuard
						element={<AuthPage />}
						authenticated={auth?.authenticate}
						user={auth?.user}
					/>
				}
			/>

			<Route
				path="/instructor"
				element={
					<RouteGuard
						element={<InstructorDashboardpage />}
						authenticated={auth?.authenticate}
						user={auth?.user}
					/>
				}
			/>

			<Route
				path="/instructor/create-new-course"
				element={
					<RouteGuard
						element={<AddNewCoursePage />}
						authenticated={auth?.authenticate}
						user={auth?.user}
					/>
				}
			/>

			<Route
				path="/instructor/edit-course/:courseId"
				element={
					<RouteGuard
						element={<AddNewCoursePage />}
						authenticated={auth?.authenticate}
						user={auth?.user}
					/>
				}
			/>

			<Route
				path="/instructor/previous-year-questions"
				element={
					<RouteGuard
						element={<PreviousYearQuestions />}
						authenticated={auth?.authenticate}
						user={auth?.user}
					/>
				}
			/>

			<Route
				path="/instructor/lecture-slides"
				element={
					<RouteGuard
						element={<LectureSlides />}
						authenticated={auth?.authenticate}
						user={auth?.user}
					/>
				}
			/>

			<Route
				path="/"
				element={
					<RouteGuard
						element={<StudentViewCommonLayout />}
						authenticated={auth?.authenticate}
						user={auth?.user}
					/>
				}
			>
				<Route path="" element={<StudentHomepage />} />
				<Route path="home" element={<StudentHomepage />} />
				<Route path="courses" element={<StudentViewCoursesPage />} />
				<Route
					path="course/details/:id"
					element={<StudentViewCourseDetailsPage />}
				/>
				<Route path="payment-return" element={<PaypalPaymentReturnPage />} />
				<Route path="student-courses" element={<StudentCoursesPage />} />
				<Route
					path="course-progress/:id"
					element={<StudentViewCourseProgressPage />}
				/>
				<Route
					path="student/previous-year-questions"
					element={<StudentPreviousYearQuestions />}
				/>
				<Route
					path="student/lecture-slides"
					element={<StudentLectureSlides />}
				/>
				
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
