// components/AddStudentForm.tsx
import React, { useState } from 'react';

type Student = {
 id: number;
 name: string;
 cg: number;
};

type AddStudentFormProps = {
 onCreate: (newStudent: Student) => void;
};

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onCreate }) => {
 const [newStudent, setNewStudent] = useState<Student>({ id: 0, name: '', cg: 0 });
 const [nextId, setNextId] = useState<number>(1);

 const handleCreate = () => {
   const studentWithId = { ...newStudent, id: nextId };
   onCreate(studentWithId);
   setNewStudent({ id: 0, name: '', cg: 0 });
   setNextId(nextId + 1);
 };

 return (
   <div>
     <h2>Add New Student</h2>
     <input
       type="text"
       placeholder="Name"
       value={newStudent.name}
       onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
     />
     <input
       type="number"
       placeholder="CG"
       value={newStudent.cg}
       onChange={(e) => setNewStudent({ ...newStudent, cg: +e.target.value })}
     />
     <button onClick={handleCreate}>Create</button>
   </div>
 );
};

export default AddStudentForm;
