// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';

// const Layout = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 overflow-auto">
//         <div className="p-6 lg:p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Layout;

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">   {/* ← Important: h-screen + overflow-hidden */}
      <Sidebar />

      {/* Main Content - Separate Scrollbar */}
      <main className="flex-1 overflow-y-auto custom-scrollbar bg-gray-100">
        <div className="p-6 lg:p-8 min-h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;