const Profile = () =>{
    return <h2>Profile Page</h2>
}

export default Profile;



// // src/app/profile/page.tsx
// import { useState } from 'react';
// import axios, { AxiosError } from 'axios';

// const ProfilePage = ({ data }: { data: any }) => {
//   const [generatedCode, setGeneratedCode] = useState<string>('');

//   const handleGenerateCode = async () => {
//     try {
//       const response = await axios.post(`http://localhost:3001/profile/${data.id}/generate`, {
//         email: data.email,
//       });

//       if (response.data.message) {
//         setGeneratedCode(response.data.message); // Update state with the actual message from the response
//       } else {
//         setGeneratedCode('Something went wrong, please try again.'); // Update state with an error message
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error('Axios error:', error.message);
//         setGeneratedCode(`Error: ${error.message}`); // Update state with the error message
//       } else {
//         console.error('An unknown error occurred:', error);
//         setGeneratedCode('An unknown error occurred'); // Update state with a general error message
//       }
//     }
//   };

//   return (
//     <>
//       <h2>Name: {data.name}</h2>
//       <button onClick={handleGenerateCode}>Generate Code</button>
//       {generatedCode && <p>{generatedCode}</p>}
//     </>
//   );
// };

// export default ProfilePage;




// Profile.tsx
// 'use client';
// import { useState } from 'react';
// import axios, { AxiosError } from 'axios';

// const Profile = ({ data }: { data: any }) => {
//   const [generatedCode, setGeneratedCode] = useState<string>('');

//   const handleGenerateCode = async () => {
//     try {
//       const response = await axios.post(`http://localhost:3001/profile/${data.id}/generate`, {
//         email: data.email,
//       });

//       if (response.data.message) {
//         setGeneratedCode(response.data.message);
//       } else {
//         setGeneratedCode('Something went wrong, please try again.');
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error('Axios error:', error.message);
//         setGeneratedCode(`Error: ${error.message}`);
//       } else {
//         console.error('An unknown error occurred:', error);
//         setGeneratedCode('An unknown error occurred');
//       }
//     }
//   };

//   return (
//     <>
//       <h2>Name: {data.name}</h2>
//       <button onClick={handleGenerateCode}>Generate Code</button>
//       {generatedCode && <p>{generatedCode}</p>}
//     </>
//   );
// };

// export default Profile;

// 'use client';
// import { useState } from 'react';
// import axios, { AxiosError } from 'axios';

// const Profile = ({ data }: { data: any }) => {
//  const [generatedCode, setGeneratedCode] = useState<string>('');

//  const handleGenerateCode = async () => {
//    try {
//      const response = await axios.post(`http://localhost:3001/profile/21/generate`, {
//        email: data.email,
//      });

//      if (response.data.message) {
//        setGeneratedCode(response.data.message);
//      } else {
//        setGeneratedCode('Something went wrong, please try again.');
//      }
//    } catch (error) {
//      if (axios.isAxiosError(error)) {
//        console.error('Axios error:', error.message);
//        setGeneratedCode(`Error: ${error.message}`);
//      } else {
//        console.error('An unknown error occurred:', error);
//        setGeneratedCode('An unknown error occurred');
//      }
//    }
//  };

//  if (!data) {
//    return <div>Loading...</div>; // Add a loading state or another placeholder here
//  }

//  return (
//    <>
//      <button onClick={handleGenerateCode}>Generate Code</button>
//      {generatedCode && <p>{generatedCode}</p>}
//    </>
//  );
// };

// export default Profile;
