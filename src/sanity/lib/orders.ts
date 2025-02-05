import { client } from "./client";

export async function getOrders() {
  const query = `*[_type == "order"] | order(_createdAt desc) {
    _id,
    customerName,
    customerPhone, // Make sure customerPhone is included in the query
    email,
    status,
    totalAmount, // Ensure totalPrice is fetched
    _createdAt
  }`;

  const orders = await client.fetch(query);
  return orders;
}

