// const porduct_list = () => {
//     return ( <h1>
//         product list
//     </h1> );
// }

// export default porduct_list;

"use client";
import React, { useState, useEffect } from "react";

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface SalesDataItem {
  id: number;
  productName: string;
  amount: number;
  customers: Customer[];
}

const SalesDataPage: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/analytics/sales");
        if (response.ok) {
          const data = await response.json();
          setSalesData(data.salesData);
        } else {
          console.error("Failed to fetch sales data");
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto pt-4 mt-10">
      <div className="block font-medium text-gray-700 mb-2 text-center">
        <p className="text-4xl font-bold mb-8">Sales Data</p>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border p-2 text-left">Product</th>
            <th className="border p-2 text-left">ID</th>
            <th className="border p-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item) => (
            <tr key={item.id} className="border">
              <td className="border p-2">{item.productName}</td>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
  

  //   return (
  //     <div>
  //     <h1>Sales Data</h1>
  //     <ul>
  //       {salesData.map((item) => (
  //         <li key={item.id}>
  //           <strong>{item.productName}</strong> (ID: {item.id}) - Amount: {item.amount}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>

  //   );
};

export default SalesDataPage;
