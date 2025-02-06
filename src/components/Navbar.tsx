// // src/app/components/Navbar.tsx
// import { SignedIn, UserButton } from "@clerk/nextjs";

// const Navbar = () => {
//   return (
//     <div className="w-full ml-0 overflow-x-hidden sticky top-0">
//       <div className="bg-cyan-50 sm:w-full shadow-md p-4 flex flex-col sm:flex-row gap-4 justify-between items-center py-6 sm:py-8">
//         <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left cursor-pointer">
//           Welcome, Admin
//         </h1>
//         <h3 className="text-lg sm:text-xl font-bold text-center sm:text-left">
//           Admin Dashboard
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






// // src/app/components/Navbar.tsx

import { SignedIn, UserButton } from "@clerk/nextjs";



const Navbar = () => {
  return (
    <div className="w-full ml-0 overflow-x-hidden  sticky top-0  ">
      <div className="bg-cyan-50 shadow-md p-4 flex flex-col sm:flex-row gap-4 justify-around items-center py-6 sm:py-8 md:ml-[50px] w-full">
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left cursor-pointer">
          Welcome, Admin
        </h1>
        <h3 className="text-lg sm:text-xl  md: lg font-bold text-center sm:text-left md: gap-2 cursor-pointer">
          Admin Dashboard  <SignedIn>
            <UserButton />
          </SignedIn>
        </h3>
        {/* <button className="bg-pink-500 text-black px-6 py-3 rounded font-semibold text-sm sm:text-base mt-4 sm:mt-0 sm:px-8 sm:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6"> </button> */}
      
         
         
       
      </div>
    </div>
  );
};

export default Navbar;







// // src/app/dashboard/components/Navbar.tsx
// const Navbar = () => {
//     return (
//      <div className="w-full ml-0"> 
//          <div className="bg-cyan-50 shadow-md p-4 flex gap-4  justify-between py-[30px] md:ml-[50px] ">
//          <h1 className="text-2xl font-bold">Welcome, Admin</h1>
//         <h3 className="text-2xl font-bold mr-">Admin Dashboard</h3>
//         <button className="bg-[pink] text-black px-[20px] py-[10px] rounded font-semibold ">Logout</button>
//       </div>
//      </div>
//     );
//   };
  
//   export default Navbar;
  