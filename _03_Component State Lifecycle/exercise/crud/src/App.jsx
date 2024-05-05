import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", age: 20, email: "john@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", age: 22, email: "jane@example.com", phone: "234-567-8901" },
    { id: 3, name: "David Brown", age: 21, email: "david@example.com", phone: "345-678-9012" }
  ]);

  const [inputValue0, setInputValue0] = useState(0);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  console.log(inputValue1, inputValue2, inputValue3, inputValue4)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue0 === 0){
    const newStudent = {
      id: students.length + 1,
      name: inputValue1,
      age: inputValue2,
      email: inputValue3,
      phone: inputValue4
    };
    setStudents([...students, newStudent]);
    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
    setInputValue4("");
  }
  else{
    const newStudent = {
      id: inputValue0,
      name: inputValue1,
      age: inputValue2,
      email: inputValue3,
      phone: inputValue4
    };
    const newStudents = students.map(student => student.id === inputValue0? newStudent : student);
    setStudents(newStudents);
    setInputValue0(0);
    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
    setInputValue4("");
  }
}

  const handleDelete = (id) => {
    const newStudents = students.filter(student => student.id !== id);
    console.log(id);
    setStudents(newStudents);
  }
  const handleUpdate = (id) =>{
    const newStudents = students.filter(student => student.id == id);
    console.log(newStudents);
    setInputValue0(newStudents[0].id);
    setInputValue1(newStudents[0].name);
    setInputValue2(newStudents[0].age);
    setInputValue3(newStudents[0].email);
    setInputValue4(newStudents[0].phone);
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>Thêm mới</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name='id' value={inputValue0} /> <br />
          <input type="text" name='name' value={inputValue1} onChange={e=>setInputValue1(e.target.value)} placeholder='Nhập tên' /><br />
          <input type="text" name='age' value={inputValue2} onChange={e=>setInputValue2(e.target.value)} placeholder='Nhập tuổi' /><br />
          <input type="text" name='email' value={inputValue3} onChange={e=>setInputValue3(e.target.value)} placeholder='Nhập email'/><br />
          <input type="text" name='phone' value={inputValue4} onChange={e=>setInputValue4(e.target.value)} placeholder='Nhập số điện thoại'/><br />
          <button type='submit' className="btn btn-primary">Thêm</button>
        </form>
      </div>
      <div className='container'>
        <h2>Danh sách sinh viên</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Họ tên</th>
              <th>Tuổi</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                  <button className="btn btn-warning" onClick={()=>handleUpdate(student.id)}>Sửa</button>
                  <button className="btn btn-danger" onClick={()=>handleDelete(student.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
