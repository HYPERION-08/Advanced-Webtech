import { notFound } from "next/navigation"

const ProfilePage = async ({params}:any) => {
    const res = await fetch(`http://localhost:3001/profile/${params.id}`, {
        cache: 'no-store'
    })
    if(!res.ok){
        notFound()
    }
    const data = await res.json()
    console.log(data)
    return (<>
    <h2>Name: {data.name}</h2>
    <h2>Email: {data.email}</h2>
    <h2>Bio: {data.bio}</h2>
    <h2>Location: {data.location}</h2>
    <h2>Website: {data.website}</h2>

    <div>
    </div>
    </>
    );
}

export default ProfilePage;


