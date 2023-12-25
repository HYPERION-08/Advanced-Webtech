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
                
                'content-length': `${targetFile.size}`, // 👈 Headers need to be a string
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data, "Data Uploaded"))
            .catch((err) => console.error(err, "Data is not uploaded"));      
        }
        console.log(fileInput.current.files[0])
    }
    return <>
        <input type="file" ref={fileInput}/>
        <button onClick={submitForm}>Submit</button>
    </>;
}
 
export default Edit;