// src/app/dashboard/components/Navbar.tsx
const Navbar = () => {
    return (
     <div className="w-full ml-0"> 
         <div className="bg-cyan-50 shadow-md p-4 flex gap-4  justify-between py-[30px] md:ml-[50px] ">
         <h1 className="text-2xl font-bold">Welcome, Admin</h1>
        <h3 className="text-2xl font-bold mr-">Admin Dashboard</h3>
        <button className="bg-[pink] text-black px-[20px] py-[10px] rounded font-semibold ">Logout</button>
      </div>
     </div>
    );
  };
  
  export default Navbar;
  