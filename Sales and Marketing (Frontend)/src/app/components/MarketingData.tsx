"use client";
import React from "react";

interface MarketingDataItem {
  id: number;
  name: string;
  email: string;
  sale: {
    id: number;
    productName: string;
    amount: number;
  } | null;
}

interface MarketingDataProps {
  marketingData: MarketingDataItem[];
}

const MarketingData: React.FC<MarketingDataProps> = ({ marketingData }) => {
  return (
    <div className="max-w-xl mx-auto pt-4 mt-10">
      <div className="block font-medium text-gray-700 mb-2 text-center">
        <p className="text-4xl font-bold mb-8">Marketing Content</p>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Product</th>
            <th className="border p-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {marketingData.map((data) => (
            <tr key={data.id} className="border">
              <td className="border p-2">{data.name}</td>
              <td className="border p-2">{data.email}</td>
              <td className="border p-2">
                {data.sale ? data.sale.productName : "-"}
              </td>
              <td className="border p-2">
                {data.sale ? data.sale.amount : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default MarketingData;
