import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashboardLayout from "./components/dashboard-layout";
import Layout from "./components/layout";
import Loader from "./components/loader";
import * as ROUTE from "./constants/routes";
import "./styles/index.css";
import Uploads from "./views/dashboard/file-case/subs/uploads";
import Claimant from "./views/dashboard/file-case/subs/claimant";
import Defendant from "./views/dashboard/file-case/subs/defendant";
import Documents from "./views/dashboard/file-case/subs/documents";
import BasicInfo from "./views/dashboard/file-case/subs/basic";
import TrackCase from "./views/dashboard/track-case";

// lazy load routes
import MyFillings from "./views/dashboard/my-filings";
import MyFillingsLanding from "./views/dashboard/my-filings/subs/all";
import MyFillingsDetails from "./views/dashboard/my-filings/subs/details";
import MyFillingsInvoice from "./views/dashboard/my-filings/subs/invoice";
import Invoice from "./views/dashboard/file-case/subs/invoice";

// auth pages
const SignUp = lazy(() => import("./views/auth/signup"));
const Login = lazy(() => import("./views/auth/login"));
const ForgotPassword = lazy(() => import("./views/auth/forgot-password"));
const ResetPassword = lazy(() => import("./views/auth/reset-password"));

const Landing = lazy(() => import("./views/landing"));
const IconPage = lazy(() => import("./views/icon-page"));
const Policy = lazy(() => import("./views/policy"));
const About = lazy(() => import("./views/About"));

// dashboard routes
const FileFirmCase = lazy(() => import("./views/dashboard/file-case"));
const Cases = lazy(() => import("./views/dashboard/cases"));
const DashboardHome = lazy(() => import("./views/dashboard/home"));
const Firms = lazy(() => import("./views/dashboard/firms"));
const TrackACase = lazy(() => import("./views/dashboard/track-case"));
const SavedDrafts = lazy(() => import("./views/dashboard/saved-drafts"));

function App() {
	const theme = useSelector((state: any) => state.theme.value);

	useEffect(() => {
		//toggle styles between light and dark theme
		document.body.setAttribute("data-theme", theme ? "dark" : "light");
	}, [theme]);

	return (
		<div className="App">
			<Suspense fallback={<Loader />}>
				<BrowserRouter>
					<Routes>
						<Route path={"/icons"} element={<IconPage />} />

						{/* nested route for main pages due to same header and footer */}
						<Route path={ROUTE.LANDING} element={<Layout />}>
							<Route index element={<Landing />} />
							<Route path={ROUTE.ABOUT} element={<About />} />
							<Route path={ROUTE.POLICY} element={<Policy />} />
						</Route>
						{/* nested route for main pages due to same header and footer */}
						<Route path={ROUTE.LANDING} element={<Layout />}>
							<Route index element={<Landing />} />
							<Route path={ROUTE.ABOUT} element={<About />} />
							<Route path={ROUTE.POLICY} element={<Policy />} />
						</Route>

						<Route path={ROUTE.LOGIN} element={<Login />} />
						<Route path={ROUTE.SIGNUP} element={<SignUp />} />
						<Route path={ROUTE.FORGOTPASSWORD} element={<ForgotPassword />} />
						<Route path={ROUTE.RESETPASSWORD} element={<ResetPassword />} />
						<Route path={ROUTE.LOGIN} element={<Login />} />
						<Route path={ROUTE.SIGNUP} element={<SignUp />} />
						<Route path={ROUTE.FORGOTPASSWORD} element={<ForgotPassword />} />
						<Route path={ROUTE.RESETPASSWORD} element={<ResetPassword />} />

						{/* nested route for dashboard (same header and sidebar) */}
						<Route path={ROUTE.DASHBOARD} element={<DashboardLayout />}>
							<Route index element={<DashboardHome />} />
							<Route path={ROUTE.CASES} element={<Cases />} />
							<Route path={ROUTE.NEWCASES.DEFAULT} element={<FileFirmCase />}>
								<Route index element={<BasicInfo />} />
								<Route path={ROUTE.NEWCASES.CLAIMANT} element={<Claimant />} />
								<Route
									path={ROUTE.NEWCASES.DEFENDANT}
									element={<Defendant />}
								/>
								<Route path={ROUTE.NEWCASES.UPLOADS} element={<Uploads />} />
								<Route
									path={ROUTE.NEWCASES.DOCUMENTS}
									element={<Documents />}
								/>
								<Route path={ROUTE.NEWCASES.INVOICE} element={<Invoice />} />
							</Route>
							<Route path={ROUTE.EXISTINGCASES} element={<Landing />} />
							<Route path={ROUTE.TRACKCASES} element={<TrackCase />} />
							<Route path={ROUTE.FILLINGS.DEFAULT} element={<MyFillings />}>
								<Route index element={<MyFillingsLanding />} />
								<Route
									path={ROUTE.FILLINGS.DETAILS}
									element={<MyFillingsDetails />}
								/>
								{/* <Route
									path={ROUTE.FILLINGS.INVOICE}
									element={<MyFillingsInvoice />}
								/> */}
							</Route>
							<Route path={ROUTE.DRAFTS} element={<SavedDrafts />} />
							<Route path={ROUTE.FIRMS} element={<Landing />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
			<ToastContainer />
		</div>
	);
}

export default App;
