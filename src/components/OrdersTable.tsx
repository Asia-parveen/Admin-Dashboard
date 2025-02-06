import { getOrders } from "../sanity/lib/orders";

type Order = {
  _id: string;
  customerName: string;
  customerPhone: string;
  totalAmount: number;
};

const Orders = async () => {
  const orders: Order[] = await getOrders();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Orders Details</h1>

      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 text-left text-gray-700">Order ID</th>
              <th className="p-4 text-left text-gray-700">Customer Name</th>
              <th className="p-4 text-left text-gray-700">Phone</th>
              <th className="p-4 text-left text-gray-700">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200 transition`}
              >
                <td className="p-4 text-gray-600">{order._id}</td>
                <td className="p-4 text-gray-800 font-medium">
                  {order.customerName}
                </td>
                <td className="p-4 text-gray-600">{order.customerPhone}</td>
                <td className="p-4 text-green-600 font-semibold">
                  ${order.totalAmount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;




// import { getOrders } from "../sanity/lib/orders"; // Import getOrders function


// // Define the type for an order
// type Order = {
//   _id: string;
//   customerName: string;
//   customerPhone: string; // Assuming you fetch the phone number in the query
//   totalAmount: number;
// };

// const Orders = async () => {
//   // Fetching the orders using the getOrders function
//   const orders: Order[] = await getOrders();

//   return (
//     <div className="flex ">
     
//       <main className="flex-1 p-6 ml-64 md:mx-[50px]">
//         <h1 className="text-3xl font-bold mb-4 bg-cyan-50 hover:bg-cyan-300 items-center py-[20px] pl-[20px]">Customers order Details</h1>

//         <div className="bg-white p-4 rounded-lg shadow-lg cursor-pointer">
//           <table className="w-full mt-4 border-collapse border ">
//             <thead className="hover:bg-cyan-300 ">
//               <tr className="bg-gray-200 hover:bg-cyan-300 cursor-pointer ">
//                 <th className="border p-2 text-left ">Order ID</th>
//                 <th className="border p-2 text-left hover:bg-cyan-300">Customer Name</th>
//                 <th className="border p-2 text-left hover:bg-cyan-300"> customer Phone</th>
//                 <th className="border p-2 text-left hover:bg-cyan-300">Total Amount</th>
//               </tr>
//             </thead>
//             <tbody className="">
//               {orders.map((order, index) => (
//                 <tr
//                   key={order._id}
//                   className={`border ${index % 2 === 1 ? "bg-cyan-50" : ""}`}
//                 >
//                   <td className="border p-2 hover:bg-cyan-300">{order._id}</td>
//                   <td className="border p-2 hover:bg-cyan-300">{order.customerName}</td>
//                   <td className="border p-2 hover:bg-cyan-300">{order.customerPhone}</td>
//                   <td className="border p-2 hover:bg-cyan-300">
//                     {/* Check if totalPrice is a valid number */}
//                     {order.totalAmount != null && !isNaN(order.totalAmount)
//                       ? `$${order.totalAmount.toFixed(2)}`
//                       : "N/A"}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
    
//     </div>
//   );
// };

// export default Orders;



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
//     <div className="bg-slate-200 p-6 shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Orders</h2>
//       <table className="w-full table-auto bg-slate-50">
//         <thead >
//           <tr className="bg-slate-300">
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
//                 index % 2 === 0 ? "bg-white" : "bg-slate-50"
//               } hover:bg-cyan-200 transition-colors duration-300`}
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



  
