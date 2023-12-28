
// ------- the original --------------

// import UpdateForm from '@/app/components/UpdateForm'
// import {notFound} from 'next/navigation'
// const Update = async ({params}: any) => {
//     const res = await fetch(`http://localhost:3001/profile/${params.id}`, {
//         cache: 'no-store'
//     })
//     if(!res.ok){
//         notFound()
//     }
//     const data = await res.json()

//     const formData = {...data, id: params.id}

//     return <UpdateForm profileData={data}/>;
// }
 
// export default Update;

//-----------------------------
//----------------------------

'use client';
import UpdateForm from '@/app/components/UpdateForm';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const Update = ({ params }: any) => {
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/profile/${params.id}`, {
          cache: 'no-store',
        });

        if (!res.ok) {
          notFound();
          return;
        }

        const data = await res.json();
        setProfileData({ ...data, id: params.id });
      } catch (error) {
        console.error('Error fetching data:', error);
        notFound();
      }
    };

    fetchData();
  }, [params.id]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return <UpdateForm profileData={profileData} />;
};

export default Update;
