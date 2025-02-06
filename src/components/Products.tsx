// "use client";


// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
//   useCdn: false,
//   apiVersion: "2023-01-01",
// });

// export type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   inventory: number;
//   colors: string[];
// };

// const ProductPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     description: "",
//     price: "",
//     inventory: "",
//     colors: "",
//   });
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Fetch all products
//   const fetchProducts = async () => {
//     try {
//       const fetchedProducts = await client.fetch(
//         `*[_type == "product"]{ 
//           _id, title, description, price, inventory, colors, image{asset->{url}} 
//         }`
//       );
//       setProducts(fetchedProducts);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Create or Update a Product
//   const handleSaveProduct = async () => {
//     try {
//       if (editingProduct) {
//         await client
//           .patch(editingProduct._id)
//           .set({
//             title: newProduct.title,
//             description: newProduct.description,
//             price: parseFloat(newProduct.price),
//             inventory: parseInt(newProduct.inventory),
//             colors: newProduct.colors.split(","),
//           })
//           .commit();
//         setEditingProduct(null);
//       } else {
//         await client.create({
//           _type: "product",
//           title: newProduct.title,
//           description: newProduct.description,
//           price: parseFloat(newProduct.price),
//           inventory: parseInt(newProduct.inventory),
//           colors: newProduct.colors.split(","),
//         });
//       }
//       setNewProduct({ title: "", description: "", price: "", inventory: "", colors: "" });
//       fetchProducts();  // Refresh product list
//     } catch (error) {
//       console.error("Error saving product:", error);
//     }
//   };

//   // Delete a Product
//   const handleDelete = async (id: string) => {
//     try {
//       await client.delete(id);
//       setProducts(products.filter((product) => product._id !== id));  // Remove product locally
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Edit a Product
//   const handleEdit = (product: Product) => {
//     setEditingProduct(product);
//     setNewProduct({
//       title: product.title,
//       description: product.description,
//       price: product.price.toString(),
//       inventory: product.inventory.toString(),
//       colors: product.colors.join(","),
//     });
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6">Manage Products</h2>
//       <div className="bg-gray-100 p-6 rounded-md shadow-md mb-8">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newProduct.title}
//           onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <textarea
//           placeholder="Description"
//           value={newProduct.description}
//           onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={newProduct.price}
//           onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Colors (comma separated)"
//           value={newProduct.colors}
//           onChange={(e) => setNewProduct({ ...newProduct, colors: e.target.value })}
//           className="w-full p-2 border rounded mb-2"
//         />
//         <button
//           onClick={handleSaveProduct}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           {editingProduct ? "Update Product" : "Add Product"}
//         </button>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="bg-white shadow-md rounded-lg p-4 relative">
//             {product.image && (
//               <Image
//                 src={product.image.asset.url}
//                 alt={product.title}
//                 width={300}
//                 height={200}
//                 className="object-cover rounded-lg w-full h-48"
//               />
//             )}
//             <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
//             <p className="text-gray-600 text-sm mt-1">{product.description.substring(0, 50)}...</p>
//             <p className="text-gray-900 font-bold mt-2">${product.price}</p>
//             <p className="text-gray-500 text-sm mt-1">Colors: {product.colors.join(", ")}</p>
//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={() => handleEdit(product)}
//                 className="text-yellow-600 hover:text-yellow-700 font-medium"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(product._id)}
//                 className="text-red-600 hover:text-red-700 font-medium"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;







import { createClient } from "@sanity/client";
import Image from "next/image";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  inventory: number;
  colors: string[];
};

const ProductPage = async () => {
  const products = await client.fetch(
    `*[_type == "product"]{ 
      _id, 
      title, 
      description, 
      price, 
      inventory, 
      colors, 
      image{asset->{url}} 
    }`
  );

  if (products.length === 0) {
    return <p className="text-center text-xl font-semibold mt-10">No products available.</p>;
  }

  return (
    <div className="px-6 py-10 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
            <Image
              src={product.image.asset.url}
              alt={product.title}
              width={300}
              height={200}
              className="object-cover rounded-lg w-full h-48"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">{product.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.description.substring(0, 50)}...</p>
            <p className="text-gray-900 font-bold mt-2">${product.price}</p>
            <p className="text-gray-500 text-sm mt-1">Available Colors: {product.colors.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;



// import { createClient } from "@sanity/client";
// import Image from "next/image";

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   token: process.env.SANITY_API_TOKEN,
//   useCdn: false,
// });

// export type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   inventory: number;
//   colors: string[];
// };

// const ProductPage = async () => {
//   // Fetch products directly inside the component during server-side rendering
//   const products = await client.fetch(
//     `*[_type == "product"]{ 
//       _id, 
//       title, 
//       description, 
//       price, 
//       inventory, 
//       colors, 
//       image{asset->{url}} 
//     }`
//   );

//   if (products.length === 0) {
//     return <p>No products available.</p>;
//   }

//   return (
//     <div className="px-4 py-8 lg:my-[50px] lg:mt-0 mx-auto md:mx-0 md:w-full">
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold text-[#000000] mb-6">Products</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto ">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">Image</th>
//                 <th className="px-4 py-2 text-left">Title</th>
//                 <th className="px-4 py-2 text-left">Description</th>
//                 <th className="px-4 py-2 text-left">Price</th>
//                 <th className="px-4 py-2 text-left">Inventory</th>
//                 <th className="px-4 py-2 text-left">Colors</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product: Product) => (
//                 <tr key={product._id}>
//                   <td className="border px-4 py-2">
//                     <Image
//                       src={product.image.asset.url}
//                       alt={product.title}
//                       width={300} // Adjust width as needed
//                       height={300} // Adjust height as needed
//                       className="object-cover rounded-md"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">{product.title}</td>
//                   <td className="border px-4 py-2">{product.description}</td>
//                   <td className="border px-4 py-2">${product.price}</td>
//                   <td className="border px-4 py-2">{product.inventory}</td>
//                   <td className="border px-4 py-2">
//                     {product.colors.join(", ")}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



