import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !grade) return;

    const newStudent = { id: Date.now(), name, grade };
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setName("");
    setGrade("");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold mb-4">Student Management</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            className="border border-gray-300 p-2 w-full mb-4 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Grade"
            className="border border-gray-300 p-2 w-full mb-4 rounded"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Student
          </button>
        </form>
        <ul className="mt-4">
          {students.map((student) => (
            <li key={student.id} className="border-b py-2">
              {student.name} - Grade: {student.grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
