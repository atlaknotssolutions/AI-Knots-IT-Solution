// import {
//   LayoutDashboard,
//   Users,
//   ShoppingCart,
//   DollarSign,
//   TrendingUp,
//   AlertCircle,
//   ArrowUpRight,
//   ArrowDownRight,
//   MessageSquare,
//   Cpu,
//   Package,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const Dashboard = () => {
//   // State for all data
//   const [dashboardData, setDashboardData] = useState({
//     totalUsers: 0,
//     totalQueries: 0,
//     totalContacts: 0,
//     totalTechProducts: 0,
//     totalTechCategories: 0,
//     loading: true,
//   });

//   const [recentActivity, setRecentActivity] = useState([]);
//   const [chartData, setChartData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);

//   // Fetch all data on component mount
//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         // Fetch all APIs in parallel using axios
//         const [
//           usersRes,
//           queriesRes,
//           contactsRes,
//           techProductsRes,
//           techCategoriesRes,
//         ] = await Promise.all([
//           axios
//             .get("http://localhost:8000/api/users")
//             .catch(() => ({ data: null })),
//           axios
//             .get("http://localhost:8000/query")
//             .catch(() => ({ data: null })),
//           axios
//             .get("http://localhost:8000/api/contact")
//             .catch(() => ({ data: null })),
//           axios
//             .get("http://localhost:8000/api/technology/product")
//             .catch(() => ({ data: null })),
//           axios
//             .get("http://localhost:8000/api/technology/category")
//             .catch(() => ({ data: null })),
//         ]);

//         // Extract data from axios responses
//         const usersData = usersRes?.data || null;
//         const queriesData = queriesRes?.data || null;
//         const contactsData = contactsRes?.data || null;
//         const techProductsData = techProductsRes?.data || null;
//         const techCategoriesData = techCategoriesRes?.data || null;

//         console.log("Users:", usersData);
//         console.log("Queries:", queriesData);
//         console.log("Contact Messages:", contactsData);
//         console.log("Technology Products:", techProductsData);
//         console.log("Technology Categories:", techCategoriesData);

//         // Extract data arrays from response objects
//         const users = usersData?.data || [];
//         const queries = queriesData?.data || [];
//         const contacts = contactsData?.data || [];
//         const techProducts = techProductsData?.data || [];
//         const techCategories = techCategoriesData?.data || [];

//         // Process data for chart - Group by date
//         const queryByDate = {};
//         const contactByDate = {};

//         // Process queries
//         queries.forEach((query) => {
//           const date = new Date(query.createdAt).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//           });
//           queryByDate[date] = (queryByDate[date] || 0) + 1;
//         });

//         // Process contacts
//         contacts.forEach((contact) => {
//           const date = new Date(contact.createdAt).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//           });
//           contactByDate[date] = (contactByDate[date] || 0) + 1;
//         });

//         // Combine data for chart
//         const allDates = [
//           ...new Set([
//             ...Object.keys(queryByDate),
//             ...Object.keys(contactByDate),
//           ]),
//         ];

//         const chartDataProcessed = allDates.map((date) => ({
//           date,
//           Queries: queryByDate[date] || 0,
//           Contacts: contactByDate[date] || 0,
//         }));

//         setChartData(chartDataProcessed);

//         // Update dashboard stats
//         setDashboardData({
//           totalUsers: Array.isArray(users) ? users.length : 0,
//           totalQueries: Array.isArray(queries) ? queries.length : 0,
//           totalContacts: Array.isArray(contacts) ? contacts.length : 0,
//           totalTechProducts: Array.isArray(techProducts)
//             ? techProducts.length
//             : techProductsData?.count || 0,
//           totalTechCategories: Array.isArray(techCategories)
//             ? techCategories.length
//             : 0,
//           loading: false,
//         });

//         // Set recent activity (full list), sorted by newest first
//         if (Array.isArray(queries) && queries.length > 0) {
//           const recentQueries = queries
//             .slice()
//             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//             .map((query, index) => ({
//               id: query._id || index,
//               user: query.name || "Anonymous",
//               action: query.category || "General Query",
//               message: query.message || "",
//               email: query.email || "",
//               phone: query.phone || "",
//               time: query.createdAt
//                 ? new Date(query.createdAt).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                   })
//                 : "Recently",
//             }));
//           setRecentActivity(recentQueries);
//         }
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//         setDashboardData((prev) => ({ ...prev, loading: false }));
//       }
//     };

//     fetchAllData();
//   }, []);

//   // Stats configuration with dynamic data
//   const stats = [

//     {
//       title: "Contact Messages",
//       value: dashboardData.loading ? "..." : dashboardData.totalContacts,
//       change: "+23%",
//       trend: "up",
//       icon: AlertCircle,
//       color: "bg-purple-500",
//     },
//     {
//       title: "Tech Products",
//       value: dashboardData.loading ? "..." : dashboardData.totalTechProducts,
//       change: "+5%",
//       trend: "up",
//       icon: Package,
//       color: "bg-orange-500",
//     },
//     {
//       title: "Tech Categories",
//       value: dashboardData.loading ? "..." : dashboardData.totalTechCategories,
//       change: "0%",
//       trend: "up",
//       icon: Cpu,
//       color: "bg-red-500",
//     },
//   ];

//   // Pie chart data
//   const pieData = [
//     { name: "Queries", value: dashboardData.totalQueries, color: "#10b981" },
//     { name: "Contacts", value: dashboardData.totalContacts, color: "#a855f7" },
//   ];

//   // Pagination for recentActivity
//   const totalRecent = recentActivity.length;
//   const totalPages = Math.max(1, Math.ceil(totalRecent / itemsPerPage));
//   const safePage = Math.min(Math.max(1, currentPage), totalPages);
//   const displayedRecent = recentActivity.slice(
//     (safePage - 1) * itemsPerPage,
//     safePage * itemsPerPage,
//   );

//   // Reset page when data or itemsPerPage changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [recentActivity, itemsPerPage]);

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
//             Dashboard
//           </h1>
//           <p className="text-gray-600 mt-1">
//             Welcome back! Here's what's happening today.
//           </p>
//         </div>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium">
//           <ArrowUpRight size={16} />
//           Export Report
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
//             >
//               <div className="flex items-center justify-between">
//                 <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
//                   <Icon
//                     className={stat.color.replace("bg-", "text-")}
//                     size={24}
//                   />
//                 </div>
//                 <span
//                   className={`text-sm font-medium flex items-center gap-1 ${
//                     stat.trend === "up" ? "text-emerald-600" : "text-red-600"
//                   }`}
//                 >
//                   {stat.change}
//                   {stat.trend === "up" ? (
//                     <ArrowUpRight size={14} />
//                   ) : (
//                     <ArrowDownRight size={14} />
//                   )}
//                 </span>
//               </div>
//               <div className="mt-5">
//                 <p className="text-sm text-gray-600">{stat.title}</p>
//                 <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
//                   {stat.value}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Line Chart - Queries & Contacts Over Time */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-6">
//             Queries & Contacts Timeline
//           </h2>
//           {dashboardData.loading ? (
//             <div className="h-80 flex items-center justify-center text-gray-500">
//               Loading chart...
//             </div>
//           ) : chartData.length > 0 ? (
//             <ResponsiveContainer width="100%" height={320}>
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//                 <XAxis
//                   dataKey="date"
//                   stroke="#6b7280"
//                   style={{ fontSize: "12px" }}
//                 />
//                 <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#fff",
//                     border: "1px solid #e5e7eb",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="Queries"
//                   stroke="#10b981"
//                   strokeWidth={3}
//                   dot={{ fill: "#10b981", r: 5 }}
//                   activeDot={{ r: 7 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="Contacts"
//                   stroke="#a855f7"
//                   strokeWidth={3}
//                   dot={{ fill: "#a855f7", r: 5 }}
//                   activeDot={{ r: 7 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="h-80 flex items-center justify-center text-gray-500">
//               No data available
//             </div>
//           )}
//         </div>

//         {/* Pie Chart - Queries vs Contacts Distribution */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-6">
//             Queries vs Contacts Distribution
//           </h2>
//           {dashboardData.loading ? (
//             <div className="h-80 flex items-center justify-center text-gray-500">
//               Loading chart...
//             </div>
//           ) : dashboardData.totalQueries > 0 ||
//             dashboardData.totalContacts > 0 ? (
//             <ResponsiveContainer width="100%" height={320}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ name, percent }) =>
//                     `${name}: ${(percent * 100).toFixed(0)}%`
//                   }
//                   outerRadius={100}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="h-80 flex items-center justify-center text-gray-500">
//               No data available
//             </div>
//           )}
//           {/* Legend */}
//           <div className="flex justify-center gap-6 mt-4">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 bg-emerald-500 rounded"></div>
//               <span className="text-sm text-gray-700">
//                 Queries ({dashboardData.totalQueries})
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 bg-purple-500 rounded"></div>
//               <span className="text-sm text-gray-700">
//                 Contacts ({dashboardData.totalContacts})
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bar Chart - Full Width */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-6">
//           Queries & Contacts Comparison
//         </h2>
//         {dashboardData.loading ? (
//           <div className="h-80 flex items-center justify-center text-gray-500">
//             Loading chart...
//           </div>
//         ) : chartData.length > 0 ? (
//           <ResponsiveContainer width="100%" height={320}>
//             <BarChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//               <XAxis
//                 dataKey="date"
//                 stroke="#6b7280"
//                 style={{ fontSize: "12px" }}
//               />
//               <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#fff",
//                   border: "1px solid #e5e7eb",
//                   borderRadius: "8px",
//                 }}
//               />
//               <Legend />
//               <Bar dataKey="Queries" fill="#10b981" radius={[8, 8, 0, 0]} />
//               <Bar dataKey="Contacts" fill="#a855f7" radius={[8, 8, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         ) : (
//           <div className="h-80 flex items-center justify-center text-gray-500">
//             No data available
//           </div>
//         )}
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-6">
//           Recent Queries
//         </h2>

//         <div className="space-y-4">
//           {dashboardData.loading ? (
//             <div className="text-center py-8 text-gray-500">Loading...</div>
//           ) : recentActivity.length > 0 ? (
//             displayedRecent.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0"
//               >
//                 <div className="flex items-start gap-3 flex-1">
//                   <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
//                     <MessageSquare size={16} className="text-blue-600" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="font-medium text-gray-900 text-sm">
//                       {item.user}
//                     </p>
//                     <p className="text-xs text-blue-600 font-medium">
//                       {item.action}
//                     </p>
//                     {item.email && (
//                       <p className="text-[11px] text-gray-500 mt-0.5">
//                         📧 {item.email}
//                       </p>
//                     )}
//                     {item.phone && (
//                       <p className="text-[11px] text-gray-500">
//                         📱 {item.phone}
//                       </p>
//                     )}
//                     {item.message && (
//                       <p className="text-[12px] text-gray-600 mt-1 line-clamp-2">
//                         {item.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="text-right ml-4">
//                   <p className="text-xs text-gray-500 whitespace-nowrap">
//                     {item.time}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-8 text-gray-500">
//               No recent queries
//             </div>
//           )}
//         </div>

//         {/* Pagination controls */}
//         {recentActivity.length > 0 && (
//           <div className="mt-4 flex items-center justify-between gap-4">
//             <div className="text-sm text-gray-600">
//               Showing {Math.min((safePage - 1) * itemsPerPage + 1, totalRecent)}
//               -{Math.min(safePage * itemsPerPage, totalRecent)} of {totalRecent}
//             </div>

//             <div className="flex items-center gap-2">
//               <select
//                 value={itemsPerPage}
//                 onChange={(e) => setItemsPerPage(Number(e.target.value))}
//                 className="border rounded px-2 py-1 text-sm"
//               >
//                 <option value={5}>5 / page</option>
//                 <option value={10}>10 / page</option>
//                 <option value={15}>15 / page</option>
//               </select>

//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={safePage === 1}
//                 className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-sm"
//               >
//                 Prev
//               </button>
//               <div className="text-sm text-gray-700 px-2">
//                 {safePage} / {totalPages}
//               </div>
//               <button
//                 onClick={() =>
//                   setCurrentPage((p) => Math.min(totalPages, p + 1))
//                 }
//                 disabled={safePage === totalPages}
//                 className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-sm"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h2 className="text-lg font-semibold text-gray-900 mb-4">
//           Quick Actions
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//           {[
//             "Add Product",
//             "Create Coupon",
//             "View Orders",
//             "Manage Users",
//             "Generate Report",
//             "Support Tickets",
//           ].map((action) => (
//             <button
//               key={action}
//               className="py-4 px-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition"
//             >
//               {action}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* System Overview */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
//         <h2 className="text-xl font-bold mb-4">System Overview</h2>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
//           <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//             <p className="text-sm opacity-90">Total Queries</p>
//             <p className="text-2xl font-bold mt-1">
//               {dashboardData.loading ? "..." : dashboardData.totalQueries}
//             </p>
//           </div>
//           <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//             <p className="text-sm opacity-90">Contacts</p>
//             <p className="text-2xl font-bold mt-1">
//               {dashboardData.loading ? "..." : dashboardData.totalContacts}
//             </p>
//           </div>
//           <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//             <p className="text-sm opacity-90">Tech Products</p>
//             <p className="text-2xl font-bold mt-1">
//               {dashboardData.loading ? "..." : dashboardData.totalTechProducts}
//             </p>
//           </div>
//           <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//             <p className="text-sm opacity-90">Categories</p>
//             <p className="text-2xl font-bold mt-1">
//               {dashboardData.loading
//                 ? "..."
//                 : dashboardData.totalTechCategories}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import {
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  MessageSquare,
  Cpu,
  Package,
  BookOpen,
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalQueries: 0,
    totalContacts: 0,
    totalTechProducts: 0,
    totalTechCategories: 0,
    totalBlogs: 0,
    loading: true,
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Fetch all data
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [
          usersRes,
          queriesRes,
          contactsRes,
          techProductsRes,
          techCategoriesRes,
          blogsRes,
        ] = await Promise.all([
          axios.get("http://localhost:8000/api/users").catch(() => ({ data: null })),
          axios.get("http://localhost:8000/query").catch(() => ({ data: null })),
          axios.get("http://localhost:8000/api/contact").catch(() => ({ data: null })),
          axios.get("http://localhost:8000/api/technology/product").catch(() => ({ data: null })),
          axios.get("http://localhost:8000/api/technology/category").catch(() => ({ data: null })),
          axios.get("http://localhost:8000/api/product/alladminproducts").catch(() => ({ data: null })), // Blog API
        ]);

        const users = usersRes?.data?.data || [];
        const queries = queriesRes?.data?.data || [];
        const contacts = contactsRes?.data?.data || [];
        const techProducts = techProductsRes?.data?.data || [];
        const techCategories = techCategoriesRes?.data?.data || [];
        const blogs = blogsRes?.data?.data || [];

        // Chart Data Processing
        const queryByDate = {};
        const contactByDate = {};

        queries.forEach((query) => {
          const date = new Date(query.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          queryByDate[date] = (queryByDate[date] || 0) + 1;
        });

        contacts.forEach((contact) => {
          const date = new Date(contact.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          contactByDate[date] = (contactByDate[date] || 0) + 1;
        });

        const allDates = [
          ...new Set([...Object.keys(queryByDate), ...Object.keys(contactByDate)]),
        ];

        const chartDataProcessed = allDates.map((date) => ({
          date,
          Queries: queryByDate[date] || 0,
          Contacts: contactByDate[date] || 0,
        }));

        setChartData(chartDataProcessed);

        // Set Dashboard Stats
        setDashboardData({
          totalUsers: users.length,
          totalQueries: queries.length,
          totalContacts: contacts.length,
          totalTechProducts: techProducts.length,
          totalTechCategories: techCategories.length,
          totalBlogs: blogs.length,
          loading: false,
        });

        // Recent Activity (Queries + Blogs)
        const recentQueries = queries.map((item) => ({
          id: item._id || Math.random(),
          type: "query",
          user: item.name || "Anonymous",
          action: item.category || "General Query",
          message: item.message || "",
          email: item.email || "",
          phone: item.phone || "",
          time: item.createdAt,
          icon: MessageSquare,
        }));

        const recentBlogs = blogs.map((blog) => ({
          id: blog._id || Math.random(),
          type: "blog",
          user: blog.author || "Admin",
          action: "Published Blog",
          message: blog.title || "Untitled Blog",
          time: blog.createdAt || blog.updatedAt,
          icon: BookOpen,
        }));

        const combined = [...recentQueries, ...recentBlogs].sort(
          (a, b) => new Date(b.time) - new Date(a.time)
        );

        setRecentActivity(combined);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setDashboardData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchAllData();
  }, []);

  // Stats Cards
  const stats = [
    {
      title: "Contact Messages",
      value: dashboardData.loading ? "..." : dashboardData.totalContacts,
      change: "+23%",
      trend: "up",
      icon: AlertCircle,
      color: "bg-purple-500",
    },
    {
      title: "Tech Products",
      value: dashboardData.loading ? "..." : dashboardData.totalTechProducts,
      change: "+5%",
      trend: "up",
      icon: Package,
      color: "bg-orange-500",
    },
    {
      title: "Tech Categories",
      value: dashboardData.loading ? "..." : dashboardData.totalTechCategories,
      change: "0%",
      trend: "up",
      icon: Cpu,
      color: "bg-red-500",
    },
    {
      title: "Total Blogs",
      value: dashboardData.loading ? "..." : dashboardData.totalBlogs,
      change: "+12%",
      trend: "up",
      icon: BookOpen,
      color: "bg-emerald-500",
    },
  ];

  const pieData = [
    { name: "Queries", value: dashboardData.totalQueries, color: "#10b981" },
    { name: "Contacts", value: dashboardData.totalContacts, color: "#a855f7" },
  ];

  // Pagination
  const totalRecent = recentActivity.length;
  const totalPages = Math.max(1, Math.ceil(totalRecent / itemsPerPage));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const displayedRecent = recentActivity.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [recentActivity, itemsPerPage]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium">
          <ArrowUpRight size={16} />
          Export Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                  <Icon className={stat.color.replace("bg-", "text-")} size={24} />
                </div>
                <span
                  className={`text-sm font-medium flex items-center gap-1 ${
                    stat.trend === "up" ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                  {stat.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                </span>
              </div>
              <div className="mt-5">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Queries & Contacts Timeline</h2>
          {dashboardData.loading ? (
            <div className="h-80 flex items-center justify-center text-gray-500">Loading chart...</div>
          ) : chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: "12px" }} />
                <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
                <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                <Legend />
                <Line type="monotone" dataKey="Queries" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 5 }} />
                <Line type="monotone" dataKey="Contacts" stroke="#a855f7" strokeWidth={3} dot={{ fill: "#a855f7", r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-80 flex items-center justify-center text-gray-500">No data available</div>
          )}
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Queries vs Contacts Distribution</h2>
          {dashboardData.loading ? (
            <div className="h-80 flex items-center justify-center text-gray-500">Loading chart...</div>
          ) : (
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-500 rounded"></div>
              <span className="text-sm text-gray-700">Queries ({dashboardData.totalQueries})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-sm text-gray-700">Contacts ({dashboardData.totalContacts})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Queries & Contacts Comparison</h2>
        {dashboardData.loading ? (
          <div className="h-80 flex items-center justify-center text-gray-500">Loading chart...</div>
        ) : chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: "12px" }} />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
              <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
              <Legend />
              <Bar dataKey="Queries" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="Contacts" fill="#a855f7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-80 flex items-center justify-center text-gray-500">No data available</div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {dashboardData.loading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : recentActivity.length > 0 ? (
            displayedRecent.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">{item.user}</p>
                      <p className="text-xs text-blue-600 font-medium">{item.action}</p>
                      {item.email && <p className="text-[11px] text-gray-500 mt-0.5">📧 {item.email}</p>}
                      {item.message && (
                        <p className="text-[12px] text-gray-600 mt-1 line-clamp-2">{item.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(item.time).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-gray-500">No recent activity</div>
          )}
        </div>

        {/* Pagination */}
        {recentActivity.length > 0 && (
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              Showing {Math.min((safePage - 1) * itemsPerPage + 1, totalRecent)} -{" "}
              {Math.min(safePage * itemsPerPage, totalRecent)} of {totalRecent}
            </div>
            <div className="flex items-center gap-2">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value={5}>5 / page</option>
                <option value={10}>10 / page</option>
                <option value={15}>15 / page</option>
              </select>
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-sm"
              >
                Prev
              </button>
              <div className="text-sm text-gray-700 px-2">
                {safePage} / {totalPages}
              </div>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* System Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-4">System Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm opacity-90">Total Queries</p>
            <p className="text-2xl font-bold mt-1">{dashboardData.loading ? "..." : dashboardData.totalQueries}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm opacity-90">Contacts</p>
            <p className="text-2xl font-bold mt-1">{dashboardData.loading ? "..." : dashboardData.totalContacts}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm opacity-90">Tech Products</p>
            <p className="text-2xl font-bold mt-1">{dashboardData.loading ? "..." : dashboardData.totalTechProducts}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm opacity-90">Categories</p>
            <p className="text-2xl font-bold mt-1">{dashboardData.loading ? "..." : dashboardData.totalTechCategories}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm opacity-90">Total Blogs</p>
            <p className="text-2xl font-bold mt-1">{dashboardData.loading ? "..." : dashboardData.totalBlogs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;