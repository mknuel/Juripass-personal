import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './components/loader';
import * as ROUTE from './constants/routes'
import './styles/index.css'

// lazy load routes
const Landing = lazy(() => import('./views/landing'))

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
            <Route index element={<Landing />} />
            <Route path={ROUTE.LANDING} element={<Landing />} />
            {/* nested route for dashboard  */}
            <Route path={ROUTE.DASHBOARD}>
              <Route path={ROUTE.DASHBOARDHOME} element={<Landing />} />
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
