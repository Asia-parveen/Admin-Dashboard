// src/app/components/Sidebar.tsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-full md:w-[25%] bg-red-400 p-6 text-center justify-items-center ml-0 sticky top-0 h-screen sm: h-scren">
      <h2 className="text-xl font-bold pt-[30px] hover:text-gray-700 cursor-pointer">Admin Dashboard</h2>
      <ul className="gap-5 pt-[20px]">
        <li className="pt-[10px] font-bold hover:text-gray-700">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="pt-[25px] font-bold hover:text-gray-700">
          <Link href="/products">Products</Link>
        </li>
        <li className="pt-[25px] font-bold hover:text-gray-700">
          <Link href="/orders">Orders</Link>
        </li>
        <li className="pt-[25px] font-bold hover:text-gray-700">
          <Link href="/sales">Sales</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;




// // src/app/components/Sidebar.tsx
// import Link from "next/link";

// const Sidebar = () => {
//   return (
//     <>
//     <div className="md:w-[25%] bg-red-400 p-6 text-center justify-items-center ml-0 sticky top-0 h-screen">
//       <h2 className="text-xl font-bold pt-[30px] hover:text-gray-700 cursor-pointer">Admin Dashboard</h2>
//       <ul className=" gap-5 pt-[20px]">
//         <li className="pt-[10px] font-bold hover:text-gray-700">
//         <Link href="/dashboard">Dashboard</Link>
//         </li>
//         <li className="pt-[25px] font-bold hover:text-gray-700">
//           <Link href="/products">Products</Link>
//         </li>
//         <li className="pt-[25px] font-bold hover:text-gray-700">
//           <Link href="/orders">Orders</Link>
//         </li>
       
//         <li className="pt-[25px] font-bold hover:text-gray-700">
//           <Link href="/sales">Sales</Link>
//         </li>
//       </ul>
//     </div>
//     </>
//   );
// };

// export default Sidebar;

