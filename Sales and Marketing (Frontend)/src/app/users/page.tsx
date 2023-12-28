import React from "react";
interface User{
    id : number;
    name: string;
}

const UsersPage = async () =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {next : { revalidate : 10}});
    const users : User[] = await res.json();

    return (
        <div className="max-w-xl mx-auto pt-4 mt-10">
          <div className="block font-medium text-gray-700 mb-2 text-center">
            <p className="text-4xl font-bold mb-8">Users</p>
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
          <ul className="list-disc list-inside">
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                {user.name}
              </li>
            ))}
          </ul>
          <br />
        </div>
      );
      
}

export default UsersPage
