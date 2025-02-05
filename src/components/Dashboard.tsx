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
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 shadow rounded">Total Orders: {orders.length}</div>
        <div className="bg-white p-4 shadow rounded">Total Products: {products.length}</div>
      </div>
      <div className="mt-6 w-1/2">
        <Pie data={data} />
      </div>
    </main>
  );
};

export default Dashboard;



