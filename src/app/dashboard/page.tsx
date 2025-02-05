"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // ✅ Correct Import
import { GET_ORDERS, GET_PRODUCTS } from "@/sanity/lib/queries";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Link from "next/link";

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
      <h1 className="text-2xl font-bold shadow-lg py-[20px] flex items-center bg-cyan-50">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[#ff6384] p-4 shadow-lg rounded font-bold text-center hover:bg-[pink]">Total Orders: {orders.length}</div>
        <div className="bg-[#36a2eb] p-4 shadow-lg rounded font-bold text-center">Total Products: {products.length}</div>
      </div>
      {/* Center and reduce the size of the pie chart */}
      <div className="mt-6 flex justify-center">
        <div className="w-2/6"> {/* Adjust the width of the graph here */}
          <Pie data={data} />
        </div>
      </div>
      <Link href="/">Go to Main Dashboard Page</Link>
    </main>
  );
};

export default Dashboard;
