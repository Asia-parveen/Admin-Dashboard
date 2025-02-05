"use client";


import { useState, useEffect } from "react";
import { client } from "../sanity/lib/client";
import { GET_ORDERS } from "../sanity/lib/queries";

interface Order {
  _id: string;
  customerName: string;
  email: string;
  status: string;
  totalPrice: number;
  _createdAt: string;
}

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders = await client.fetch(GET_ORDERS);
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-slate-200 p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <table className="w-full table-auto bg-slate-50">
        <thead >
          <tr className="bg-slate-300">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order._id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              } hover:bg-cyan-200 transition-colors duration-300`}
            >
              <td className="border p-2">{order._id}</td>
              <td className="border p-2">{order.customerName}</td>
              <td className="border p-2">${order.totalPrice}</td>
              <td className="border p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;



// "use client";

// import { useState, useEffect } from "react";
// import { client } from "../sanity/lib/client";
// import { GET_ORDERS } from "../sanity/lib/queries";

// interface Order {
//   _id: string;
//   customerName: string;
//   email: string;
//   status: string;
//   totalPrice: number;
//   _createdAt: string;
// }

// const OrdersTable = () => {
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const fetchedOrders = await client.fetch(GET_ORDERS);
//       setOrders(fetchedOrders);
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="bg-cyan-100 p-6 shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Orders</h2>
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="border p-2">Order ID</th>
//             <th className="border p-2">Customer</th>
//             <th className="border p-2">Total Price</th>
//             <th className="border p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr
//               key={order._id}
//               className={`${
//                 index % 2 === 0 ? "bg-white" : "bg-gray-50"
//               } hover:bg-cyan-200 transition-colors`}
//             >
//               <td className="border p-2">{order._id}</td>
//               <td className="border p-2">{order.customerName}</td>
//               <td className="border p-2">${order.totalPrice}</td>
//               <td className="border p-2">{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersTable;


// "use client";

// import { useState, useEffect } from "react";
// import { client } from "../sanity/lib/client";
// import { GET_ORDERS } from "../sanity/lib/queries";

// interface Order {
//   _id: string;
//   customerName: string;
//   email: string;
//   status: string;
//   totalPrice: number;
//   _createdAt: string;
// }

// const OrdersTable = () => {
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const fetchedOrders = await client.fetch(GET_ORDERS);
//       setOrders(fetchedOrders);
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="bg-white p-6 shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Orders</h2>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="border p-2">Order ID</th>
//             <th className="border p-2">Customer</th>
//             <th className="border p-2">Total Price</th>
//             <th className="border p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td className="border p-2">{order._id}</td>
//               <td className="border p-2">{order.customerName}</td>
//               <td className="border p-2">${order.totalPrice}</td>
//               <td className="border p-2">{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersTable;



  
