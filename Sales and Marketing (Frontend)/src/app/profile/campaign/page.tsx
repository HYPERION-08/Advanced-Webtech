// 'use client';
// const Campaign = () => {
//     return ( <h1>
//         test
//     </h1> );
// }

// export default Campaign;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Campaign = () => {
  const [marketingContent, setMarketingContent] = useState<string>("");
  const router = useRouter();

  const sendMarketingEmail = async () => {
    try {
      const response = await fetch(`http://localhost:3001/profile/campaign`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          marketingContent,
        }),
      });

      if (response.ok) {
        console.log("Marketing email sent successfully");
      } else {
        console.log("Something went wrong with the marketing campaign");
      }
    } catch (error) {
      console.error("Error sending marketing email:", error);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 mt-10">
        <label className="block font-medium text-gray-700 mb-2 ">
          <p className="text-4xl font-bold mb-8">Marketing Content</p>
          <textarea
            placeholder="Enter marketing content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ color: "black" }}
            value={marketingContent}
            onChange={(e) => setMarketingContent(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={sendMarketingEmail}
        >
          Send Marketing Email
        </button>
        <br></br>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          <Link href={`/profile/campaign/analytics`}>View Analytics</Link>
        </button>
      </div>
    </>
  );

  // return (
  //   <>
  //     <label>
  //       Marketing Content:
  //       <textarea
  //         placeholder="Enter marketing content"
  //         style={{ color: 'black' }}
  //         value={marketingContent}
  //         onChange={(e) => setMarketingContent(e.target.value)}
  //       />
  //     </label>
  //     <button onClick={sendMarketingEmail}>Send Marketing Email</button>
  //     <br></br>
  //     <br></br>
  //     <Link href={`/profile/campaign/analytics`}>View Analytics</Link>
  //   </>
  // );
};

export default Campaign;
