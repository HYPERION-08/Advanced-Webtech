"use client"
import { useRef } from "react";
const Edit = () => {
    const fileInput = useRef(null)
    const formData = new FormData()
    
    const submitForm = () =>{
        if(fileInput.current.files){
            const targetFile = fileInput.current.files[0]
            formData.append("file", targetFile)
            fetch('http://localhost:3001/profile/upload', {
            method: 'POST',
            body: formData,
            headers: {
                
                'content-length': `${targetFile.size}`,
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data, "Data Uploaded"))
            .catch((err) => console.error(err, "Data is not uploaded"));      
        }
        console.log(fileInput.current.files[0])
    }
    return <>

        <div  className="max-w-md mx-auto p-4 mt-10">

        <input type="file" ref={fileInput}/>
        <button onClick={submitForm} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  my-2 mx-4 rounded">Submit</button>
        </div>
       
    </>;
}
 
export default Edit;