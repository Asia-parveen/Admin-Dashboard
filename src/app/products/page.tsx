import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

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
  // Fetch products directly inside the component during server-side rendering
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
    return <p>No products available.</p>;
  }

  return (
    <div className="px-4 py-8 lg:my-[50px] lg:mt-0 mx-auto md:mx-0 md:w-full">
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#000000] mb-6">All Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-slate-400">
            <thead className="bg-[#000000] text-white">
              <tr>
                <th className="px-2 py-2 text-left text-sm sm:text-base">Image</th>
                <th className="px-2 py-2 text-left text-sm sm:text-base">Title</th>
                <th className="px-2 py-2 text-left text-sm sm:text-base">Description</th>
                <th className="px-2 py-2 text-left text-sm sm:text-base">Price</th>
                <th className="px-2 py-2 text-left text-sm sm:text-base">Inventory</th>
                <th className="px-2 py-2 text-left text-sm sm:text-base">Colors</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: Product) => (
                <tr key={product._id}>
                  <td className="border px-2 py-2 sm:px-4 sm:py-2">
                    <Image
                      src={product.image.asset.url}
                      alt={product.title}
                      width={150} // Adjust width for smaller screens
                      height={150} // Adjust height for smaller screens
                      className="object-cover rounded-md"
                    />
                  </td>
                  <td className="border px-2 py-2 sm:px-4 sm:py-2 text-sm sm:text-base">
                    {product.title}
                  </td>
                  <td className="border px-2 py-2 sm:px-4 sm:py-2 text-sm sm:text-base">
                    {product.description}
                  </td>
                  <td className="border px-2 py-2 sm:px-4 sm:py-2 text-sm sm:text-base">
                    ${product.price}
                  </td>
                  <td className="border px-2 py-2 sm:px-4 sm:py-2 text-sm sm:text-base">
                    {product.inventory}
                  </td>
                  <td className="border px-2 py-2 sm:px-4 sm:py-2 text-sm sm:text-base">
                    {product.colors.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link href="/">Go to Main Dashboard Page</Link>
    </div>
  );
};

export default ProductPage;



// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

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
//         <h2 className="text-2xl font-bold text-[#000000] mb-6">All Products</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto bg-slate-400">
//             <thead className="bg-[#000000] text-white">
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
//       <Link href="/">Go to Main Dashboard Page</Link>
//     </div>
//   );
// };

// export default ProductPage;