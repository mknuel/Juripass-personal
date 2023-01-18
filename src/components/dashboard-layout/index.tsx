import { Outlet } from 'react-router';
import Sidebar from '../sidebar';

function DashboardLayout() {
   return (
      <div id='dashboard'>
         <div id='dashboard-sidebar'>
            <Sidebar />
         </div>
         <div id='dashboard-main'>
            <Outlet />
         </div>
      </div>
   )
}

export default DashboardLayout