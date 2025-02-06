




"use client";

import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { GET_SALES_OVERVIEW, GET_PRODUCTS_COUNT, GET_CUSTOMERS_COUNT } from "../sanity/lib/queries";
import { FaShoppingCart, FaBoxOpen, FaUserAlt, FaShoppingBag } from "react-icons/fa";

// Sales data ka type define karen
interface SalesItem {
  totalAmount: number;
  // Agar aur properties hain to unhe bhi yahan define karen
}

interface Product {
  totalAmount: number;
}

interface Customer {
  customerName: string;
  // Agar aur properties hain to unhe bhi yahan define karen
}

const SalesOverview = () => {
  // State hooks ko specific types ke saath initialize karen
  const [salesData, setSalesData] = useState<SalesItem[]>([]);
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [customersData, setCustomersData] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Sales Data fetch karen
        const orderData = await client.fetch(GET_SALES_OVERVIEW);
        setSalesData(orderData);

        // Products Data fetch karen
        const productData = await client.fetch(GET_PRODUCTS_COUNT);
        setProductsData(productData);

        // Customers Data fetch karen
        const customerData = await client.fetch(GET_CUSTOMERS_COUNT);
        setCustomersData(customerData);
      } catch (error) {
        console.error("Sanity se data fetch karte waqt error:", error);
      }
    };

    fetchData();
  }, []);

  // Totals calculate karen
  const totalSales = salesData.reduce((total, order) => total + (order.totalAmount || 0), 0);
  const totalOrders = salesData.length;
  const totalCustomers = new Set(customersData.map((customer) => customer.customerName)).size;
  const totalProducts = productsData.length;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-[#000000] mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1: Total Sales */}
        <div className="bg-pink-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
          <div className="flex justify-center items-center mb-2">
            <FaShoppingCart className="text-3xl text-pink-600" />
          </div>
          <p className="text-lg font-medium text-gray-700">Total Sales</p>
          <p className="text-xl font-semibold text-pink-600">
            ${totalSales > 0 ? totalSales.toFixed(2) : "0"}
          </p>
        </div>

        {/* Card 2: Total Orders */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
          <div className="flex justify-center items-center mb-2">
            <FaShoppingBag className="text-3xl text-blue-600" />
          </div>
          <p className="text-lg font-medium text-gray-700">Total Orders</p>
          <p className="text-xl font-semibold text-blue-600">{totalOrders > 0 ? totalOrders : "0"}</p>
        </div>

        {/* Card 3: Total Customers */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
          <div className="flex justify-center items-center mb-2">
            <FaUserAlt className="text-3xl text-green-600" />
          </div>
          <p className="text-lg font-medium text-gray-700">Total Customers</p>
          <p className="text-xl font-semibold text-green-600">{totalCustomers > 0 ? totalCustomers : "0"}</p>
        </div>

        {/* Card 4: Total Products */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
          <div className="flex justify-center items-center mb-2">
            <FaBoxOpen className="text-3xl text-yellow-600" />
          </div>
          <p className="text-lg font-medium text-gray-700">Total Products</p>
          <p className="text-xl font-semibold text-yellow-600">{totalProducts > 0 ? totalProducts : "0"}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;











// "use client";

// import { useEffect, useState } from "react";
// import { client } from "../sanity/lib/client";
// import { GET_SALES_OVERVIEW, GET_PRODUCTS_COUNT, GET_CUSTOMERS_COUNT } from "../sanity/lib/queries";
// import { FaShoppingCart, FaBoxOpen, FaUserAlt, FaShoppingBag } from "react-icons/fa";

// const SalesOverview = () => {
//   const [salesData, setSalesData] = useState<any[]>([]);
//   const [productsData, setProductsData] = useState<any[]>([]);
//   const [customersData, setCustomersData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch Sales Data
//         const orderData = await client.fetch(GET_SALES_OVERVIEW);
//         setSalesData(orderData);

//         // Fetch Products Data
//         const productData = await client.fetch(GET_PRODUCTS_COUNT);
//         setProductsData(productData);

//         // Fetch Customers Data
//         const customerData = await client.fetch(GET_CUSTOMERS_COUNT);
//         setCustomersData(customerData);
//       } catch (error) {
//         console.error("Error fetching data from Sanity:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Calculate totals
//   const totalSales = salesData.reduce((total, order) => total + (order.totalPrice || 0), 0);
//   const totalOrders = salesData.length;
//   const totalCustomers = new Set(customersData.map((order: any) => order.customerName)).size;
//   const totalProducts = productsData.length;

//   return (
//     <div className="bg-white p-6 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-pink-500 mb-4">Dashboard Overview</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {/* Card 1: Total Sales */}
//         <div className="bg-pink-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
//           <div className="flex justify-center items-center mb-2">
//             <FaShoppingCart className="text-3xl text-pink-600" />
//           </div>
//           <p className="text-lg font-medium text-gray-700">Total Sales</p>
//           <p className="text-xl font-semibold text-pink-600">
//             ${totalSales > 0 ? totalSales.toFixed(2) : "0"}
//           </p>
//         </div>

//         {/* Card 2: Total Orders */}
//         <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
//           <div className="flex justify-center items-center mb-2">
//             <FaShoppingBag className="text-3xl text-blue-600" />
//           </div>
//           <p className="text-lg font-medium text-gray-700">Total Orders</p>
//           <p className="text-xl font-semibold text-blue-600">{totalOrders > 0 ? totalOrders : "0"}</p>
//         </div>

//         {/* Card 3: Total Customers */}
//         <div className="bg-green-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
//           <div className="flex justify-center items-center mb-2">
//             <FaUserAlt className="text-3xl text-green-600" />
//           </div>
//           <p className="text-lg font-medium text-gray-700">Total Customers</p>
//           <p className="text-xl font-semibold text-green-600">{totalCustomers > 0 ? totalCustomers : "0"}</p>
//         </div>

//         {/* Card 4: Total Products */}
//         <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
//           <div className="flex justify-center items-center mb-2">
//             <FaBoxOpen className="text-3xl text-yellow-600" />
//           </div>
//           <p className="text-lg font-medium text-gray-700">Total Products</p>
//           <p className="text-xl font-semibold text-yellow-600">{totalProducts > 0 ? totalProducts : "0"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalesOverview;






