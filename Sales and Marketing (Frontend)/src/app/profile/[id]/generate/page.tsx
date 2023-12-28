"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const generate = ({ params }: any) => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement | null>(null);

  const generateOtp = async () => {
    fetch(`http://localhost:3001/profile/${params.id}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          router.push(`/profile/${params.id}/verify`);
        } else {
          console.log("Something wrong");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="max-w-xl mx-auto pt-4 mt-10">
        <div className="block font-medium text-gray-700 mb-2 text-center">
          <p className="text-4xl font-bold mb-8">OTP</p>
        </div>
        <input
          type="enail"
          placeholder="enter your email for otp"
          style={{ color: "black" }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={emailRef}
        />
        <div className="justify-center flex">
          <button
            className="ml-2 hover:underline bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 m-4"
            onClick={generateOtp}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default generate;
