"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // ✅ Correct Import
import { GET_ORDERS, GET_PRODUCTS } from "@/sanity/lib/queries";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data inside useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedOrders = await client.fetch(GET_ORDERS);
        const fetchedProducts = await client.fetch(GET_PRODUCTS);
        setOrders(fetchedOrders);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Chart Data
  const data = {
    labels: ["Orders", "Products"],
    datasets: [
      {
        data: [orders.length, products.length],
        backgroundColor: ["#ff6384", "#36a2eb"],
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-bold shadow-lg py-[20px] flex items-center bg-cyan-50">Order OverView</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[pink] text-black p-4 shadow-lg rounded font-bold text-center hover:bg-[pink]">Total Orders: {orders.length}</div>
        <div className="bg-cyan-100  p-4 shadow-lg rounded font-bold text-center">Total Products: {products.length}</div>
      </div>
      {/* Center and reduce the size of the pie chart */}
      <div className="mt-6 flex justify-center">
        <div className="w-3/2"> {/* Adjust the width of the graph here */}
          <Pie data={data} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;


// // src/app/dashboard/components/SalesGraph.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
//  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { GET_ORDERS, GET_PRODUCTS } from '../sanity/lib/queries';
// import { client } from '../sanity/lib/client';
// import {  Title,  LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
 
// );

// ChartJS.register(ArcElement, Tooltip, Legend);

// const SalesGraph = () => {
//   const [ordersCount, setOrdersCount] = useState(0);
//   const [productsCount, setProductsCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const orders = await client.fetch(GET_ORDERS);
//         const products = await client.fetch(GET_PRODUCTS);
//         setOrdersCount(orders.length);
//         setProductsCount(products.length);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const data = {
//     labels: ['Orders', 'Products'],
//     datasets: [
//       {
//         data: [ordersCount, productsCount],
//         backgroundColor: ['#ff6384', '#36a2eb'],
//       },
//     ],
//   };

//   return (
//     <div className="bg-white p-6 shadow rounded text-center">
//       <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
//       <div className="w-2/6 text-center"> {/* Adjust the width of the graph here */}
//           <Pie data={data} />
//         </div>
//     </div>
//   );
// };

// export default SalesGraph;



// "use client";

// // src/app/dashboard/components/SalesGraph.tsx
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { GET_ORDERS, GET_PRODUCTS } from "../sanity/lib/queries";
// import { client } from "../sanity/lib/client"

// ChartJS.register(ArcElement, Tooltip, Legend);

// const SalesGraph = async () => {
//   const orders = await client.fetch(GET_ORDERS);
//   const products = await client.fetch(GET_PRODUCTS);

//   const data = {
//     labels: ["Orders", "Products"],
//     datasets: [
//       {
//         data: [orders.length, products.length],
//         backgroundColor: ["#ff6384", "#36a2eb"],
//       },
//     ],
//   };

//   return (
//     <div className="bg-white p-6 shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
//       <Pie data={data} />
//     </div>
//   );
// };

// export default SalesGraph;
