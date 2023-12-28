// const product = () => {
//     return ( <h1>

//         product add page
//     </h1> );
// }

// export default product;

// ProductForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ProductForm: React.FC = () => {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:3001/analytics/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productName, amount }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product added successfully:", data);
        router.push(`/profile/campaign/analytics`);
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10">
      <label className="block font-medium text-gray-700 mb-2">
        Product Name
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block font-medium text-gray-700 mb-2">
        Amount
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductForm;
