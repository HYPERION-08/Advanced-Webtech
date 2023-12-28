"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface MyProps {
  profileData: {
    name: string;
    email: string;
    password: string;
    bio: string;
    location: string;
    website: string;
    id: number;
  };
}

const UpdateForm: React.FC<MyProps> = (props: MyProps) => {
  const { name, email, password, bio, location, website, id } =
    props.profileData;

  const router = useRouter();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const bioRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);
  const websiteRef = useRef<HTMLInputElement | null>(null);

  const updateForm = () => {
    console.log(nameRef.current?.value);
    if (!name || !email) {
      console.error("Name and Email are required fields");
      return;
    }

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        bio: bioRef.current?.value,
        location: locationRef.current?.value,
        website: websiteRef.current?.value,
      }),
    };

    fetch(`http://localhost:3001/profile/update/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Update successful:", data);
        router.push(`/profile/${id}`);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <>
      <div className="block font-medium text-gray-700 mb-4 text-center mt-10">
        <p className="text-4xl font-bold mb-8">Update Profile</p>
      </div>
      <div className="max-w-md mx-auto p-4 mt-10">
        <label className="block font-medium text-gray-700 mb-2">
          Name
          <input
            type="text"
            placeholder="Name"
            style={{ color: "black" }}
            defaultValue={name}
            ref={nameRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block font-medium text-gray-700 mb-2">
          Email
          <input
            type="email"
            placeholder="Email"
            style={{ color: "black" }}
            defaultValue={email}
            ref={emailRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block font-medium text-gray-700 mb-2">
          Password
          <input
            type="password"
            placeholder="Password"
            style={{ color: "black" }}
            defaultValue={password}
            ref={passwordRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block font-medium text-gray-700 mb-2">
          Bio
          <input
            type="text"
            placeholder="Bio"
            style={{ color: "black" }}
            defaultValue={bio}
            ref={bioRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block font-medium text-gray-700 mb-2">
          Location
          <input
            type="text"
            placeholder="Location"
            style={{ color: "black" }}
            defaultValue={location}
            ref={locationRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block font-medium text-gray-700 mb-2">
          Website
          <input
            type="text"
            placeholder="Website"
            style={{ color: "black" }}
            defaultValue={website}
            ref={websiteRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={updateForm}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <input type="text" placeholder="Name" style={{ color: 'black' }} defaultValue={name} ref={nameRef}/>
  //     <input type="email" placeholder="Email" style={{ color: 'black' }} defaultValue={email} ref={emailRef}/>
  //     <input type="text" placeholder="Password" style={{ color: 'black' }} defaultValue={password} ref={passwordRef}/>
  //     <input type="text" placeholder="Bio" style={{ color: 'black' }} defaultValue={bio} ref={bioRef}/>
  //     <input type="text" placeholder="Location" style={{ color: 'black' }} defaultValue={location} ref={locationRef}/>
  //     <input type="text" placeholder="Website" style={{ color: 'black' }} defaultValue={website} ref={websiteRef}/>
  //     <button onClick={updateForm}>Submit</button>
  //   </>
  // );
};

export default UpdateForm;
