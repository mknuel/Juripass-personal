import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashboardLayout from './components/dashboard-layout';
import Layout from './components/layout';
import Loader from './components/loader';
import * as ROUTE from './constants/routes'
import './styles/index.css'

// lazy load routes
const SignUp = lazy(() => import('./views/signup'))
const Login = lazy(() => import('./views/login'))
const Landing = lazy(() => import('./views/landing'))

function App() {
  const navigate = useNavigate()
  const theme = useSelector((state: any) => state.theme.value)

  useEffect(() => {
    //toggle styles between light and dark theme
    document.body.setAttribute('data-theme', theme ? 'dark' : 'light');
  }, [theme])

  // useEffect(() => {
  //   //redirect to home
  //   if (window.location.pathname === "/") {
  //     navigate("/home")
  //   }
  // }, [])
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>

            {/* nested route for main pages due to same header and footer */}
            <Route path={ROUTE.LANDING} element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path={ROUTE.ABOUT} element={<Landing />} />
              <Route path={ROUTE.POLICY} element={<Landing />} />
            </Route>

            <Route path={ROUTE.LOGIN} element={<Login />} />
            <Route path={ROUTE.SIGNUP} element={<SignUp />} />
            <Route path={ROUTE.FORGOTPASSWORD} element={<SignUp />} />
            <Route path={ROUTE.RESETPASSWORD} element={<SignUp />} />

            {/* nested route for dashboard (same header and sidebar) */}
            <Route path={ROUTE.DASHBOARD} element={<DashboardLayout />}>
              <Route index element={<Landing />} />
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
