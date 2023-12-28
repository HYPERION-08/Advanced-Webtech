// "use client"
// const Verify = ({params}: any) => {
//     const submitOtp = async () =>{
//         console.log("OTP")
//     }
//     return <>
//     <input type="text" placeholder="Enter your otp" style={{color: 'black'}}/>
//     <button onClick={submitOtp}>Submit</button>
//     </>;
// }
 
// export default Verify;


"use client";
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const Verify = ({ params }: any) => {
  const otpRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter()

  const submitOtp = async () => {
    try {
      const response = await fetch(`http://localhost:3001/profile/${params.id}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: otpRef.current?.value,
        }),
      });

      if (response.ok) {
        console.log('OTP verification successful');
        router.push(`/profile/${params.id}`)
      } else {
        console.log('Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto pt-4 mt-10">
        <div className="block font-medium text-gray-700 mb-2 text-center">
          <p className="text-4xl font-bold mb-8">Verify</p>
        </div>
        <input
          type="enail"
          placeholder="Enter your OTP"
          style={{ color: "black" }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={otpRef}
        />
        <div className="justify-center flex">
          <button
            className="ml-2 hover:underline bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 m-4"
            onClick={submitOtp}
          >
            Submit
          </button>
        </div>
      </div>

      {/* <input type="text" placeholder="Enter your OTP" style={{ color: 'black' }} ref={otpRef} />
      <button onClick={submitOtp}>Submit</button> */}
    </>
  );
};

export default Verify;
