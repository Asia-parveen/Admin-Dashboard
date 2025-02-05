

import { getOrders } from "../../sanity/lib/orders"; // Import getOrders function
import Link from "next/link";

// Define the type for an order
type Order = {
  _id: string;
  customerName: string;
  customerPhone: string; // Assuming you fetch the phone number in the query
  totalAmount: number;
};

const Orders = async () => {
  // Fetching the orders using the getOrders function
  const orders: Order[] = await getOrders();

  return (
    <div className="flex ">
    
      <main className="flex-1 p-6 ml-64 md:mx-[50px]">
        <h1 className="text-3xl font-bold mb-4 bg-cyan-50 hover:bg-cyan-300 items-center py-[20px] pl-[20px]">Orders Details</h1>

        <div className="bg-white p-4 rounded-lg shadow-lg cursor-pointer">
          <table className="w-full mt-4 border-collapse border ">
            <thead className="hover:bg-cyan-300 ">
              <tr className="bg-gray-200 hover:bg-cyan-300 cursor-pointer ">
                <th className="border p-2 text-left ">Order ID</th>
                <th className="border p-2 text-left hover:bg-cyan-300">Customer Name</th>
                <th className="border p-2 text-left hover:bg-cyan-300"> customer Phone</th>
                <th className="border p-2 text-left hover:bg-cyan-300">Total Amount</th>
              </tr>
            </thead>
            <tbody className="">
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className={`border ${index % 2 === 1 ? "bg-cyan-50" : ""}`}
                >
                  <td className="border p-2 hover:bg-cyan-300">{order._id}</td>
                  <td className="border p-2 hover:bg-cyan-300">{order.customerName}</td>
                  <td className="border p-2 hover:bg-cyan-300">{order.customerPhone}</td>
                  <td className="border p-2 hover:bg-cyan-300">
                    {/* Check if totalPrice is a valid number */}
                    {order.totalAmount != null && !isNaN(order.totalAmount)
                      ? `$${order.totalAmount.toFixed(2)}`
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/">Go to Main Dashboard Page</Link>
      </main>
     
    </div>
  );
};

export default Orders;

