"use client"; // Ensure it's a client-side component

import { useState, useEffect } from "react";
import { client } from "../sanity/lib/client";
import { GET_MONTHLY_SALES } from "../sanity/lib/queries";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesAnalytics = () => {
  const [salesData, setSalesData] = useState<{ month: string; sales: number }[]>([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const data: { _createdAt: string; totalAmount: number }[] = await client.fetch(GET_MONTHLY_SALES);

        if (!data || data.length === 0) {
          console.warn("No sales data found in Sanity!");
          return;
        }

        const monthlySales = data.reduce<Record<string, number>>((acc, order) => {
          const month = new Date(order._createdAt).toLocaleString("en-US", { month: "short" });
          acc[month] = (acc[month] || 0) + order.totalAmount;
          return acc;
        }, {});

        const formattedData = Object.keys(monthlySales).map((month) => ({
          month,
          sales: monthlySales[month],
        }));

        setSalesData(formattedData);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSales();
  }, []);

  const chartData = {
    labels: salesData.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: salesData.map((item) => item.sales),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-[#000000] mb-4">Sales Analytics</h2>
      {salesData.length === 0 ? (
        <p>No sales data available</p>
      ) : (
        <div className="h-72">
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      )}
    </div>
  );
};

export default SalesAnalytics;



// 'use client'

// import { useState, useEffect } from 'react'
// import { client } from '../sanity/lib/client'
// import { GET_SALES_ANALYTICS } from '../sanity/lib/queries'
// import { Line } from 'react-chartjs-2'
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js'

// ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend)

// const SalesAnalytics = () => {
//   const [salesData, setSalesData] = useState<{ month: string; sales: number }[]>([])

//   useEffect(() => {
//     const fetchSales = async () => {
//       try {
//         const data: { _createdAt: string; totalAmount: number }[] = await client.fetch(GET_SALES_ANALYTICS)

//         if (!data || data.length === 0) {
//           console.warn('No sales data found in Sanity!')
//           return
//         }

//         const monthlySales = data.reduce<Record<string, number>>((acc, order) => {
//           const month = new Date(order._createdAt).toLocaleString('en-US', { month: 'short' })
//           acc[month] = (acc[month] || 0) + order.totalAmount
//           return acc
//         }, {})

//         const formattedData = Object.keys(monthlySales).map((month) => ({
//           month,
//           sales: monthlySales[month],
//         }))

//         setSalesData(formattedData)
//       } catch (error) {
//         console.error('Error fetching sales data:', error)
//       }
//     }

//     fetchSales()
//   }, [])

//   const chartData = {
//     labels: salesData.map((item) => item.month),
//     datasets: [
//       {
//         label: 'Monthly Sales ($)',
//         data: salesData.map((item) => item.sales),
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: true,
//       },
//     ],
//   }

//   return (
//     <div className="bg-white p-6 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-pink-500 mb-4">Sales Analytics</h2>
//       {salesData.length === 0 ? (
//         <p>No sales data available</p>
//       ) : (
//         <div className="h-64">
//           <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
//         </div>
//       )}
//     </div>
//   )
// }

// export default SalesAnalytics




// "use client"; // Ensure it's a client-side component

// import { useState, useEffect } from "react";
// import { client } from "../sanity/lib/client";
// import { GET_MONTHLY_SALES } from "../sanity/lib/queries";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

// const SalesAnalytics = () => {
//   const [salesData, setSalesData] = useState<{ month: string; sales: number }[]>([]);

//   useEffect(() => {
//     const fetchSales = async () => {
//       try {
//         console.log("Fetching sales data from Sanity..."); // Debugging log

//         const data: { _createdAt: string; totalPrice: number }[] = await client.fetch(GET_MONTHLY_SALES);

//         console.log("Fetched Sales Data:", data); // Debugging log

//         if (!data || data.length === 0) {
//           console.warn("⚠ No sales data found in Sanity!"); // If no data
//           return;
//         }

//         const monthlySales = data.reduce<Record<string, number>>((acc, order) => {
//           const month = new Date(order._createdAt).toLocaleString("en-US", { month: "short" });
//           acc[month] = (acc[month] || 0) + order.totalPrice;
//           return acc;
//         }, {});

//         console.log("Processed Monthly Sales Data:", monthlySales); // Debugging log

//         const formattedData = Object.keys(monthlySales).map((month) => ({
//           month,
//           sales: monthlySales[month],
//         }));

//         console.log("Formatted Sales Data for Chart:", formattedData); // Final formatted data for chart

//         setSalesData(formattedData); // Set formatted data to state
//       } catch (error) {
//         console.error("🚨 Error fetching sales data:", error); // Error handling
//       }
//     };

//     fetchSales(); // Call function inside useEffect
//   }, []);

//   // Chart.js Data Formatting
//   const chartData = {
//     labels: salesData.map((item) => item.month),
//     datasets: [
//       {
//         label: "Monthly Sales ($)",
//         data: salesData.map((item) => item.sales),
//         borderColor: "rgb(75, 192, 192)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         fill: true,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Sales Analytics</h2>
//       {salesData.length === 0 ? (
//         <p>No sales data available</p>
//       ) : (
//         <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
//       )}
//     </div>
//   );
// };

// export default SalesAnalytics;







