//------------------- original ----------
// ------------------ original ---------
// import Link from "next/link"
// import { notFound } from "next/navigation"

// const ProfilePage = async ({params}:any) => {
//     const res = await fetch(`http://localhost:3001/profile/${params.id}`, {
//         cache: 'no-store'
//     })
//     if(!res.ok){
//         notFound()
//     }
//     const data = await res.json()
//     console.log(data)
//     return (<>
//     <h2>Name: {data.name}</h2>
//     <h2>Email: {data.email}</h2>
//     <h2>Bio: {data.bio}</h2>
//     <h2>Location: {data.location}</h2>
//     <h2>Website: {data.website}</h2>
//     <Link href={`/profile/${params.id}/generate`}>Generate</Link>
//     <Link href={`/profile/${params.id}/update`}>Update</Link>
//     <Link href={`/profile/${params.id}/campaign`}>Campaign</Link>
//     </>
//     );
// }

// export default ProfilePage;

// -----------------
//----------------------------

"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Profile {
  name: string;
  email: string;
  bio: string;
  location: string;
  website: string;
  password: string;
}

const ProfilePage = ({ params }: any) => {
  const router = useRouter();
  const [data, setData] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/profile/${params.id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          notFound();
          return;
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Data not available</div>;
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/profile/delete/${params.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("User deleted successfully");
        router.push("/");
      } else {
        console.error("Error deleting user");
        
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <>
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-48 p-4 bg-gray-200">
          <Link
            href={`/profile/${params.id}/generate`}
            className="block mb-2 p-2 hover:bg-gray-300"
          >
            2 Factor
          </Link>
          <Link
            href={`/profile/${params.id}/update`}
            className="block mb-2 p-2 hover:bg-gray-300"
          >
            Update
          </Link>

          <Link
            href={`/profile/campaign`}
            className="block mb-2 p-2 hover:bg-gray-300"
          >
            Campaign
          </Link>
          <Link
            href={`/profile/notification`}
            className="block mb-2 p-2 hover:bg-gray-300"
          >
            Notifications
          </Link>

          <Link
            href={`/profile/edit`}
            className="block mb-2 p-2 hover:bg-gray-300"
          >
            Image Upload
          </Link>

          <button
            className="block mb-2 p-2 hover:bg-gray-300"
            onClick={handleDelete}
            style={{ padding: "10px 100px 10px 8px" }}
          >
            Delete
          </button>
        </div>

        {/* Right Content */}
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <table className="table-auto text-lg">
            <tbody>
              <tr>
                <td className="font-bold pr-2 border-b">Name:</td>
                <td className="border-b">{data.name}</td>
              </tr>
              <tr>
                <td className="font-bold pr-2 border-b">Email:</td>
                <td className="border-b">{data.email}</td>
              </tr>
              <tr>
                <td className="font-bold pr-2 border-b">Bio:</td>
                <td className="border-b">{data.bio}</td>
              </tr>
              <tr>
                <td className="font-bold pr-2 border-b">Location:</td>
                <td className="border-b">{data.location}</td>
              </tr>
              <tr>
                <td className="font-bold pr-2 border-b">Website:</td>
                <td className="border-b">{data.website}</td>
              </tr>
            </tbody>
          </table>

          <br></br>

          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-700">
            <Link href="/">Logout</Link>
          </button>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="w-50">
  //         <h2>Name: {data.name}</h2>
  //         <h2>Email: {data.email}</h2>
  //         <h2>Bio: {data.bio}</h2>
  //         <h2>Location: {data.location}</h2>
  //         <h2>Website: {data.website}</h2>

  //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 mx-3 my-1">
  //           <Link href={`/profile/${params.id}/generate`}>Generate</Link>
  //         </button>

  //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 mx-3 my-1">
  //         <Link href={`/profile/${params.id}/update`}>Update</Link>
  //         </button>

  //         <button
  //           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-3 my-1"
  //           onClick={handleDelete}
  //         >
  //           Delete
  //         </button>

  //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 mx-3 my-1">
  //         <Link href={`/profile/campaign`} className="button-link">
  //           Campaign
  //         </Link>
  //         </button>

  //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 mx-3 my-1">
  //         <Link href={`/`} className="button-link">
  //           LogOut
  //         </Link>
  //         </button>

  //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 mx-3 my-1">
  //           <Link href={`/profile/notification`}>Notifications</Link>
  //         </button>
  //       </div>
  //     </div>
  //   </>
  // );

  // return (
  //   <>
  //     <h2>Name: {data.name}</h2>
  //     <h2>Email: {data.email}</h2>
  //     <h2>Bio: {data.bio}</h2>
  //     <h2>Location: {data.location}</h2>
  //     <h2>Website: {data.website}</h2>
  //     {/* <h2>Password: {data.password}</h2> */}
  //     <Link href={`/profile/${params.id}/generate`}>Generate</Link> <br />
  //     <Link href={`/profile/${params.id}/update`}>Update</Link> <br />
  //     <button onClick={handleDelete}>Delete</button> <br />
  //     <Link href={`/profile/campaign`}>Campaign</Link> <br />
  //     <Link href={`/`}>LogOut</Link>
  //     <br />
  //     <Link href={`/profile/notification`}>Notifications</Link>
  //   </>
  // );
};

export default ProfilePage;
