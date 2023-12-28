"use client";
import React, { useState, useEffect } from "react";
import MarketingData from "../../../components/MarketingData";
import Link from "next/link";

const YourComponent: React.FC = () => {
  const [marketingData, setMarketingData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/analytics/marketing";

    const fetchMarketingData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setMarketingData(data.marketingData);
        } else {
          console.error("Failed to fetch marketing data");
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    };

    fetchMarketingData();
  }, []);

  return (
    <div>
      <MarketingData marketingData={marketingData} />

      <div className="flex justify-center items-center pb-10">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mx-4">
          <Link href={`/profile/campaign/analytics/product`}>Add Product</Link>
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mx-4">
          <Link href={`/profile/campaign/analytics/customer`}>
            Add Customer
          </Link>
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
