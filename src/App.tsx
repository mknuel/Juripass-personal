import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashboardLayout from './components/dashboard-layout';
import Layout from './components/layout';
import Loader from './components/loader';
import * as ROUTE from './constants/routes'
import './styles/index.css'
import ForgotPassword from './views/login/ForgotPassword';
import ResetPassword from './views/login/ResetPassword';

// lazy load routes
const SignUp = lazy(() => import('./views/signup'!))
const Login = lazy(() => import('./views/login'))
const Landing = lazy(() => import('./views/landing'))
const About = lazy(() => import('./views/About/'))
const Policy = lazy(() => import('./views/Policy/'))
const DashboardHome = lazy(() => import('./views/dashboard/home'))

function App() {
  const theme = useSelector((state: any) => state.theme.value)

  useEffect(() => {
    //toggle styles between light and dark theme
    document.body.setAttribute('data-theme', theme ? 'dark' : 'light');
  }, [theme])

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>

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

            {/* nested route for dashboard (same header and sidebar) */}
            <Route path={ROUTE.DASHBOARD} element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path={ROUTE.CASES} element={<Landing />} />
              <Route path={ROUTE.NEWCASES} element={<Landing />} />
              <Route path={ROUTE.EXISTINGCASES} element={<Landing />} />
              <Route path={ROUTE.TRACKCASES} element={<Landing />} />
              <Route path={ROUTE.FILLINGS} element={<Landing />} />
              <Route path={ROUTE.DRAFTS} element={<Landing />} />
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
