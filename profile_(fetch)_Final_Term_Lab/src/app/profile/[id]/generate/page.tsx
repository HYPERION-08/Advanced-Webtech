// // src/app/pages/api/profile/[id]/generate.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import axios, { AxiosError } from 'axios';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;

//   if (req.method === 'POST') {
//     try {
//       // Assuming `dto` is provided in the request body
//       const response = await axios.post(`http://localhost:3001/profile/${id}/generate`, req.body);
//       res.status(response.status).json(response.data);
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             // Now TypeScript knows that error is an AxiosError
//             res.status(error.response?.status || 500).json({ error: error.message });
//           } else {
//             // Handle unknown error type
//             res.status(500).json({ error: 'An unknown error occurred' });
//           }
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }



const generate = () =>{
  return <h2>generate page</h2>
}

export default generate;