import { Table, Container } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ students, setStudents ] = useState([]);

  useEffect(()=>{
    fetchStudents()
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:3009/students');
     if(response){
        setStudents(response.data.students);
     }
  }

  return (
    <div className="App">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>OtherName</th>
              <th>Student Number</th>
              <th>Registration Number</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Dob</th>
            </tr>
          </thead>
          <tbody>
            {
              students?.map((student, index)=>{
                return (<tr>
                  <td>{index + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.otherNames}</td>
                  <td>{student.studentNumber}</td>
                  <td>{student.registrationNumber}</td>
                  <td>{student.gender}</td>
                  <td>{student.email}</td>
                  <td>{student.telephone}</td>
                  <td>{student.dateOfBirth}</td>
                </tr>)
              })
            }
          </tbody>
        </Table>
      </Container>
       
    </div>
  );
}

export default App;
