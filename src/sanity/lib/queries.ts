// src/lib/queries.ts

// Query to get all orders
export const GET_ORDERS = `*[_type == "order"] | order(_createdAt desc) {
    _id,
    customerName,
    email,
    status,
    totalPrice,
    _createdAt
  }`;
  
  // Query to get all products
  export const GET_PRODUCTS = `*[_type == "product"] {
    _id,
    title,
    price,
    category,
    stock,
    _createdAt
  }`;
//   export const GET_SALES_OVERVIEW = `
//   *[_type == "order"] {
//     _id,
//     totalPrice,
//     customerName,
//     products[]->{_id}
//   }
// `;

// Query for Sales Overview (Total Sales and Total Orders)
export const GET_SALES_OVERVIEW = `
  *[_type == "order"] {
    totalPrice,
  }
`;

// Query for Products Count
export const GET_PRODUCTS_COUNT = `
  *[_type == "product"] {
    _id
  }
`;

// Query for Customers Count (Unique Customers based on Order data)
export const GET_CUSTOMERS_COUNT = `
  *[_type == "order"] {
    customerName
  }
`;
// Query for all sales transactions from Sanity
export const GET_SALES_ANALYTICS = `
  *[_type == "order"] {
    totalPrice,
    _createdAt
  }
`;
export const GET_MONTHLY_SALES = `
  *[_type == "order"] {
    _createdAt,
    totalAmount
  }
`;







  
