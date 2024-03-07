import logo from './logo.svg';
import './App.css';

function App() {
  const students = [
    { id: 1, name: 'John', age: 20, address: '123 Street, City' },
    { id: 2, name: 'Jane', age: 21, address: '456 Avenue, Town' },
    { id: 3, name: 'Doe', age: 22, address: '789 Road, Village' }
  ];
  return (
    <div>
    <h2>Danh sách sinh viên</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default App;
