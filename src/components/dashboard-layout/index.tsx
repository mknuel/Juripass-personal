import { Outlet } from 'react-router';
import DashboardHeader from '../dashboard-header';
import Sidebar from '../sidebar';

function DashboardLayout() {
   return (
      <div>
         <div id='sidebar'>
            <Sidebar />
         </div>
         <div>
            <div id='header'>
               <DashboardHeader />
            </div>
            <div id='main'>
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default DashboardLayout