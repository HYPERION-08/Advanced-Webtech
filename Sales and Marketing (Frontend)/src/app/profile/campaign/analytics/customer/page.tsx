// const customer = () => {
//     return ( <h1>
//         customer page
//     </h1>  );
// }

// export default customer;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saleId, setSaleId] = useState("");

  const handleAddSale = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/analytics/marketing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, saleId }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Customer added successfully:", data);
        router.push("/profile/campaign/analytics");
      } else {
        console.error("Failed to add Customer");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10">
      <label className="block font-medium text-gray-700 mb-2">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block font-medium text-gray-700 mb-2">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block font-medium text-gray-700 mb-2">
        Product ID
        <input
          type="text"
          value={saleId}
          onChange={(e) => setSaleId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <div className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 my-2 mx-4 rounded"
          onClick={handleAddSale}
        >
          Add Customer
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  my-2 mx-4 rounded">
          <Link href={`/profile/campaign/analytics/customer/list`}>
            Product ID List
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
