import { ArrowLeft2, HambergerMenu } from 'iconsax-react';
import { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../sidebar';
import './index.scss'

function DashboardLayout() {

   const [isOpen, setIsOpen] = useState(true)
   
   return (
      <div id='dashboard'>
         <div id='dashboard-sidebar' style={{ display: `${isOpen ? 'block' : 'none'}` }} >
            <ArrowLeft2 size="32" color="#FF8A65" onClick={() => setIsOpen(current => !current)} className='header-menu' />
            <Sidebar />
         </div>
         <div id='dashboard-main'>
            <HambergerMenu size="32" color="#FF8A65" onClick={() => setIsOpen(current => !current)} className='header-menu' />
            <Outlet />
         </div>
      </div>
   )
}

export default DashboardLayout