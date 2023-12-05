"use client";
import React, { useState } from 'react';
import StudentList from './Components/List';
import AddStudentForm from './Components/Add';

type Student = {
  id: number;
  name: string;
  cg: number;
};

const Home: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const handleCreate = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleUpdate = (id: number, updatedStudent: Student) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => (student.id === id ? updatedStudent : student))
    );
  };

  const handleDelete = (id: number) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>Student Information</h1>
      <StudentList students={students} onUpdate={handleUpdate} onDelete={handleDelete} />
      <AddStudentForm onCreate={handleCreate} />
    </div>
  );
};

export default Home;