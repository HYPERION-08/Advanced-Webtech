// components/StudentList.tsx
"use client";
import React from 'react';

type Student = {
  id: number;
  name: string;
  cg: number;
};

type StudentListProps = {
  students: Student[];
  onUpdate: (id: number, updatedStudent: Student) => void;
  onDelete: (id: number) => void;
};



const StudentList: React.FC<StudentListProps> = ({ students, onUpdate, onDelete }) => (
  <ul>
    {students.map((student) => (
      <li key={student.id}>
        {`ID: ${student.id}, Name: ${student.name}, CG: ${student.cg}`}{' '}
        <button onClick={() => onUpdate(student.id, { ...student, name: 'Updated' })}>
          Update
        </button>{' '}
        <button onClick={() => onDelete(student.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default StudentList;